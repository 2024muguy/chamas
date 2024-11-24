const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Food', foodSchema);
