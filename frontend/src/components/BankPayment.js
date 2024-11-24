// src/components/BankPayment.js
import React, { useState } from 'react';
import axios from 'axios';

const BankPayment = ({ amount }) => {
  const [accountDetails, setAccountDetails] = useState({ bankName: '', accountNumber: '' });
  const [loading, setLoading] = useState(false);

  const handleBankPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/bank/pay`, {
        amount,
        accountDetails,
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
    <div>
      <h3>Pay via Bank Transfer</h3>
      <input
        type="text"
        placeholder="Bank Name"
        value={accountDetails.bankName}
        onChange={(e) => setAccountDetails({ ...accountDetails, bankName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Account Number"
        value={accountDetails.accountNumber}
        onChange={(e) => setAccountDetails({ ...accountDetails, accountNumber: e.target.value })}
      />
      <button onClick={handleBankPayment} disabled={loading}>
        {loading ? 'Processing...' : `Pay Ksh ${amount}`}
      </button>
    </div>
  );
};

export default BankPayment;
