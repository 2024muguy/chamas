const express = require('express');
const router = express.Router();
const { initiateBankPayment } = require('../controllers/bankController');

// Route for processing bank payments
router.post('/pay', initiateBankPayment);

module.exports = router;
