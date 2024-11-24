// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // "Clothing", "Toys", "Food"
  price: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', itemSchema);
