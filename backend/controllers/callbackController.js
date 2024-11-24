exports.mpesaCallback = async (req, res) => {
    try {
      const { Body: { stkCallback } } = req.body;
  
      if (stkCallback.ResultCode === 0) {
        // Payment success logic
        console.log('Payment Success:', stkCallback);
      } else {
        console.log('Payment Failed:', stkCallback.ResultDesc);
      }
  
      res.status(200).json({ message: 'Callback received.' });
    } catch (error) {
      console.error('Callback processing error:', error);
      res.status(500).json({ message: 'Server error processing callback.' });
    }
  };
  