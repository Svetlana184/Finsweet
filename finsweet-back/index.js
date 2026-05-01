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
    port: process.env.DB_PORT,
    schema: process.env.DB_SСHEMA
})

const PORT = 3000

pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Database connection error:', err.message))

pool.connect()
    .then(() => checkDatabase())
    .catch(err => console.error('Database connection error:', err.message))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello, World!')
});

app.get('/api/metrics', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.metrics')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/reviews', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.reviews')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/blogs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.blogs')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/companies', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.companies')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/jobs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.jobs')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/services', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.services')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/steps/expertise', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.steps WHERE type = \'expertise\'')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/steps/services', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.steps WHERE type = \'services\'')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/steps/process', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.steps WHERE type = \'process\'')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/steps/culture', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.steps WHERE type = \'culture\'')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM finsweet.users WHERE position_in_system = \'employee\'')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error.message}` })
    }
});