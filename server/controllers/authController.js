const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
// Register User
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await User.create({ username, email, password });
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({ token, user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login User
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
