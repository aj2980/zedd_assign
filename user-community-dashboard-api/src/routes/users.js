const express = require('express');
const router = express.Router();
const { users } = require('../data/mockData');

// GET /users - Returns all users
router.get('/', (req, res) => {
    res.json(users);
});

// POST /users - Adds a new user
router.post('/', (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({ message: 'Invalid user data' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        role
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;