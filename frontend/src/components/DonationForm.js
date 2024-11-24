import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    method: 'mpesa',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/donations', formData);
    console.log('Donation Success', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Enter amount" />
      <select name="method" value={formData.method} onChange={handleChange}>
        <option value="mpesa">M-Pesa</option>
        <option value="paypal">PayPal</option>
        <option value="bank">Bank Transfer</option>
      </select>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
