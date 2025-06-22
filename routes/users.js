const express = require('express');
const router = express.Router();
const {User} = require('../models/model');
const bcrypt = require('bcryptjs');
const auth=require('../middleware/auth')


// View all users
router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// View single user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user
router.put('/:id', async (req, res) => {
    try {
        const { name, email, age, password } = req.body;

        // Step 1: Check if user exists
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Step 2: Prepare update data
        let updateData = { name, email, age };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateData.password = hashedPassword;
        }

        // Step 3: Update the user
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// DELETE a user by ID
router.delete('/:id', async (req, res) => {
    try {
        // Attempt to find and delete the user by their ID from the URL
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        // If no user is found, send a 404 response
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // If deletion is successful, send a success message
        res.json({ message: 'User deleted' });
    } catch (err) {
        // If an error occurs (e.g., invalid ID format), send a 500 error
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
