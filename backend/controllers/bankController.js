const Payment = require('../models/paymentModel');
const { processBankTransfer } = require('../utils/bankUtils');

exports.initiateBankPayment = async (req, res) => {
  const { amount, accountNumber } = req.body;

  // Validate input
  if (!amount || !accountNumber) {
    return res.status(400).json({ success: false, message: 'Amount and account number are required.' });
  }

  try {
    // Simulate bank transfer processing
    const paymentStatus = await processBankTransfer(amount, accountNumber);

    if (paymentStatus.success) {
      // Save payment record to the database
      const payment = new Payment({
        amount,
        method: 'Bank Transfer',
        status: 'Success',
        reference: paymentStatus.reference, // Assuming processBankTransfer returns a reference
        accountNumber,
      });

      await payment.save();

      return res.status(200).json({
        success: true,
        message: 'Payment processed successfully.',
        reference: paymentStatus.reference,
      });
    } else {
      return res.status(500).json({ success: false, message: 'Bank payment failed.' });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};
