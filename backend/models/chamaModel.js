const mongoose = require('mongoose');

const chamaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  package: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
  ],
});

const Chama = mongoose.model('Chama', chamaSchema);

module.exports = Chama;
