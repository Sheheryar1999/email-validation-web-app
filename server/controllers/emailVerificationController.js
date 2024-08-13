const Verification = require('../models/verificationModel');

exports.verifyEmail = async (req, res) => {
    const { email } = req.body;
    const userId = req.user.id; // Assuming JWT middleware sets req.user
    try {
        // Placeholder logic for email verification
        const status = email.includes('@') ? 'valid' : 'invalid';

        const verification = await Verification.create({
            userId,
            email,
            status
        });

        res.status(201).json({ verification });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
