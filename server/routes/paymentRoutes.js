const express = require('express');
const { purchaseCredits } = require('../controllers/paymentController');
const router = express.Router();

router.post('/purchase', purchaseCredits);

module.exports = router;
