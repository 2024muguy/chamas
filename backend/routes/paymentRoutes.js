const express = require('express');
const { createPayPalPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/paypal', createPayPalPayment);

module.exports = router;
