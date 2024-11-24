const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  vision: { type: String, required: true },
  members: [
    {
      name: String,
      email: String,
      phone: String
    }
  ],  // Now this will store user details as objects
  achievements: { type: String, required: true },
  goals: { type: String, required: true }
});

module.exports = mongoose.model('Group', groupSchema);
