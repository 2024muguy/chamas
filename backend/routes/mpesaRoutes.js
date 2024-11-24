const express = require('express');
const router = express.Router();

// Importing the functions from your controller
const { initiateMPesaPayment } = require('../controllers/mpesaController');
const { mpesaCallback } = require('../controllers/callbackController');

// Route for initiating M-Pesa payment
router.post('/mpesa/pay', initiateMPesaPayment);

// Route for M-Pesa callback
router.post('/callback', mpesaCallback);

module.exports = router;
