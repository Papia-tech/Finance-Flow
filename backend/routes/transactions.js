const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../database');
const requireAuth = require('../middleware/authMiddleware');

const router = express.Router();

// Apply authentication middleware to all transaction routes
router.use(requireAuth);

// Add a new transaction
router.post('/', (req, res) => {
    const { title, category, amount, type } = req.body;
    const userId = req.user.userId;

    if (!title || !category || amount === undefined || !type) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.run(
        `INSERT INTO transactions (user_id, title, category, amount, type) VALUES (?, ?, ?, ?, ?)`,
        [userId, title, category, amount, type],
        function(err) {
            if (err) {
                console.error('Database error inserting transaction:', err.message);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.status(201).json({ message: 'Transaction added successfully', id: this.lastID });
        }
    );
});

// Get all transactions for the logged in user
router.get('/', (req, res) => {
    const userId = req.user.userId;

    db.all(
        `SELECT * FROM transactions WHERE user_id = ? ORDER BY date DESC`,
        [userId],
        (err, rows) => {
            if (err) {
                console.error('Database error fetching transactions:', err.message);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.json(rows);
        }
    );
});

// Delete a transaction
router.delete('/:id', (req, res) => {
    const userId = req.user.userId;
    const txId = req.params.id;

    db.run(
        `DELETE FROM transactions WHERE id = ? AND user_id = ?`,
        [txId, userId],
        function(err) {
            if (err) {
                console.error('Database error deleting transaction:', err.message);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: 'Transaction not found or unauthorized' });
            }
        }
    );
});

// Reset all transactions
router.post('/reset', (req, res) => {
    const userId = req.user.userId;
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    db.get(`SELECT password_hash FROM users WHERE id = ?`, [userId], async (err, row) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!row) return res.status(404).json({ error: 'User not found' });

        try {
            const match = await bcrypt.compare(password, row.password_hash);
            if (!match) {
                return res.status(401).json({ error: 'Incorrect password' });
            }

            db.run(`DELETE FROM transactions WHERE user_id = ?`, [userId], function(err) {
                if (err) return res.status(500).json({ error: 'Error resetting data' });
                res.json({ message: 'System reset successfully' });
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

module.exports = router;
