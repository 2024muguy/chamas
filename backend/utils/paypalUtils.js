const paypal = require('paypal-rest-sdk');
const dotenv = require('dotenv');
dotenv.config();

// Configure PayPal SDK with your credentials
paypal.configure({
  mode: process.env.PAYPAL_MODE, // 'sandbox' or 'live'
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

// Process PayPal payment
exports.processPayPalPayment = async (amount, transactionId) => {
  const paymentJson = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: process.env.PAYPAL_RETURN_URL,
      cancel_url: process.env.PAYPAL_CANCEL_URL,
    },
    transactions: [
      {
        amount: {
          total: amount.toString(),
          currency: 'USD',
        },
        description: `Donation transaction ID: ${transactionId}`,
      },
    ],
  };

  try {
    const payment = await new Promise((resolve, reject) => {
      paypal.payment.create(paymentJson, function (error, payment) {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });

    if (payment.state === 'approved') {
      return { success: true, message: 'Payment successful' };
    } else {
      return { success: false, message: 'Payment not approved' };
    }
  } catch (error) {
    console.error('Error processing PayPal payment:', error);
    return { success: false, message: 'Server error' };
  }
};
