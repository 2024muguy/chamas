const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  method: {
    type: String,
    enum: ['M-Pesa', 'PayPal', 'Bank Transfer'], 
    required: true,
  },
  status: {
    type: String,
    enum: ['Success', 'Failed', 'Pending'], 
    required: true,
  },
  reference: {
    type: String,
    required: true, 
  },
  phoneNumber: {
    type: String,
    required: function() {
      return this.method === 'M-Pesa'; 
    },
  },
  transactionId: {
    type: String,
    required: function() {
      return this.method === 'PayPal'; 
    },
  },
  accountNumber: {
    type: String,
    required: function() {
      return this.method === 'Bank Transfer'; 
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); 

module.exports = mongoose.model('Payment', paymentSchema);
