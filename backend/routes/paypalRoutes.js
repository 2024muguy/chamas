const express = require('express');
const router = express.Router();
const { initiatePayPalPayment } = require('../controllers/paypalController');

router.post('/process', initiatePayPalPayment);

module.exports = router;
