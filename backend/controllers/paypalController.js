const Payment = require('../models/paymentModel');
const { processPayPalPayment } = require('../utils/paypalUtils');

exports.initiatePayPalPayment = async (req, res) => {
  const { amount, transactionId } = req.body;

  if (!amount || !transactionId) {
    return res.status(400).json({ message: 'Amount and transaction ID are required.' });
  }

  try {
    const paymentStatus = await processPayPalPayment(amount, transactionId);
    if (paymentStatus.success) {
      const payment = new Payment({
        amount,
        method: 'PayPal',
        status: 'Success',
      });
      await payment.save();
      return res.status(200).json({ message: 'PayPal payment processed successfully.' });
    } else {
      return res.status(500).json({ message: 'PayPal payment failed.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};
