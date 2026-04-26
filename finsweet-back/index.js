require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { Pool } = require('pg')

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

const PORT = 3000

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