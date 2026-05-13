const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key';
const SALT_ROUNDS = 10;

// Register new user
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        
        db.run(`INSERT INTO users (username, password_hash) VALUES (?, ?)`, [username, hashedPassword], function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(409).json({ error: 'Username already exists' });
                }
                console.error('Database error during registration:', err.message);
                return res.status(500).json({ error: 'Internal server error' });
            }
            
            res.status(201).json({ message: 'User registered successfully', userId: this.lastID });
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login user
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, row) => {
        if (err) {
            console.error('Database error during login:', err.message);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (!row) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        try {
            const match = await bcrypt.compare(password, row.password_hash);
            if (match) {
                // Generate JWT token
                const token = jwt.sign({ userId: row.id, username: row.username }, JWT_SECRET, { expiresIn: '24h' });
                res.json({ message: 'Login successful', token });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        } catch (error) {
            console.error('Error comparing passwords:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Get current user profile (protected route example)
router.get('/me', require('../middleware/authMiddleware'), (req, res) => {
    // req.user contains the decoded token data (e.g., userId and username)
    res.json({ user: req.user });
});

module.exports = router;
