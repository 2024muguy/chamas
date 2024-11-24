const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String, 
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Partner', partnerSchema);
