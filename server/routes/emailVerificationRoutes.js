const express = require('express');
const { verifyEmail } = require('../controllers/emailVerificationController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/verify', authMiddleware, verifyEmail);

module.exports = router;
