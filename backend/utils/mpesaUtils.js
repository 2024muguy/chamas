const axios = require('axios');

// Fetch access token from M-Pesa Daraja API
const getAccessToken = async () => {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: { Authorization: `Basic ${auth}` },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to fetch access token:', error);
    throw new Error('Unable to authenticate with M-Pesa API.');
  }
};

// Process M-Pesa payment using STK Push
exports.processMPesaPayment = async (amount, phoneNumber) => {
  const accessToken = await getAccessToken();
  const timestamp = new Date().toISOString().replace(/[-T:\.Z]/g, '').slice(0, 14); // YYYYMMDDHHMMSS
  const shortCode = process.env.MPESA_SHORTCODE;
  const passkey = process.env.MPESA_PASSKEY;
  const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');

  const requestBody = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: shortCode,
    PhoneNumber: phoneNumber,
    CallBackURL: `${process.env.CALLBACK_URL}/api/mpesa/callback`,
    AccountReference: 'DonationPlatform',
    TransactionDesc: 'Donation Payment',
  };

  try {
    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.data.ResponseCode === '0') {
      return {
        success: true,
        reference: response.data.CheckoutRequestID,
      };
    } else {
      return {
        success: false,
        message: response.data.errorMessage || 'M-Pesa payment failed.',
      };
    }
  } catch (error) {
    console.error('Error during STK Push:', error.response?.data || error);
    return {
      success: false,
      message: 'Failed to process M-Pesa payment.',
    };
  }
};
