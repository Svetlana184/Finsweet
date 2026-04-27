require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json())

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const JWT_SECRET = process.env.JWT_SECRET || process.env.DB_SECRET
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is required')
}

const PORT = 3000

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ error: 'Токен обязателен' })
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Неверный токен' })
        }

        req.user = user
        next()
    })
}

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Не авторизован' })
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Нет доступа' })
        }

        next()
    }
}

pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Database connection error:', err.message))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello, World!')
});

app.get('/api/metrics', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM metrics')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/steps', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM steps')
        const stepsWithImages = result.rows.map(step => ({
            ...step,
            icon_url: step.icon_base64 
                ? `data:image/svg+xml;base64,${step.icon_base64}`  
                : null 
        }))
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { name_user, password } = req.body

    try {
        const result = await pool.query(
            'SELECT id, name_user, password, role FROM users WHERE name_user = $1',
            [name_user]
        )

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Неверные данные' })
        }

        const user = result.rows[0]
        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
            return res.status(401).json({ error: 'Неверные данные' })
        }

        const token = jwt.sign(
            {
                id: user.id,
                name_user: user.name_user,
                role: user.role
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.json({
            user: {
                id: user.id,
                name_user: user.name_user,
                role: user.role
            },
            token
        })
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ error: 'Ошибка сервера' })
    }
})

app.post('/api/auth/register', async (req, res) => {
    const { name_user, password, age_user } = req.body

    if (!name_user || !password || !age_user) {
        return res.status(400).json({ error: 'Заполни все поля' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await pool.query(
            'INSERT INTO users (name_user, password, age_user, role) VALUES ($1, $2, $3, $4) RETURNING id, name_user, role',
            [name_user, hashedPassword, age_user, 'user']
        )

        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error('ОШИБКА:', error)
        res.status(500).json({ error: error.message })
    }
})