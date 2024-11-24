// src/components/MPesaButton.js
import React, { useState } from 'react';
import axios from 'axios';

const MPesaButton = ({ amount, phoneNumber }) => {
  const [loading, setLoading] = useState(false);

  const handleMPesaPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/mpesa/pay`, {
        amount,
        phoneNumber,
      });
      if (response.data.success) {
        alert('Payment successful!');
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment error. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <button onClick={handleMPesaPayment} disabled={loading}>
      {loading ? 'Processing...' : `Pay with M-Pesa Ksh ${amount}`}
    </button>
  );
};

export default MPesaButton;
