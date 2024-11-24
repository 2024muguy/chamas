const Payment = require('../models/paymentModel');
const { processMPesaPayment } = require('../utils/mpesaUtils');
const { validatePhoneNumber } = require('../utils/validationUtils');

exports.initiateMPesaPayment = async (req, res) => {
  const { amount, phoneNumber } = req.body;

  // Input validation
  if (!amount || !phoneNumber) {
    return res.status(400).json({ success: false, message: 'Amount and phone number are required.' });
  }
  
  if (!validatePhoneNumber(phoneNumber)) {
    return res.status(400).json({ success: false, message: 'Invalid phone number format.' });
  }

  try {
    const paymentStatus = await processMPesaPayment(amount, phoneNumber);

    if (paymentStatus.success) {
      const payment = new Payment({
        amount,
        method: 'M-Pesa',
        status: 'Success',
        reference: paymentStatus.reference,
        phoneNumber,
      });

      await payment.save();

      return res.status(200).json({
        success: true,
        message: 'M-Pesa payment processed successfully.',
        reference: paymentStatus.reference,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: paymentStatus.message || 'M-Pesa payment failed.',
      });
    }
  } catch (error) {
    console.error('Error initiating M-Pesa payment:', error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};
