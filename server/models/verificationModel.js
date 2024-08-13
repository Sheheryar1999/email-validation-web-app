const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['valid', 'invalid', 'unknown'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Verification = mongoose.model('Verification', verificationSchema);
module.exports = Verification;
