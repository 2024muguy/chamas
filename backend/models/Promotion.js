const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  link: String,
});

module.exports = mongoose.model('Promotion', promotionSchema);
