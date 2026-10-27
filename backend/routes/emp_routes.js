const express = require('express');
const router = express.Router();
const { users } = require('../models/users');
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Name, email and password are required'
            });
        }

        // Check whether email already exists
        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: 'Email already registered'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new users({
            name,
            email,
            password: hashedPassword,
            role: role || 'EMPLOYEE'
        });

        await newUser.save();

        res.status(201).json({
            message: 'Registration successful'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Registration failed'
        });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }

        const user = await users.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        res.status(200).json({
            message: 'Login successful',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Login failed'
        });
    }
});

router.get('/viewtask', (req, res) => {
    res.send('View task page called');
});

module.exports = router;