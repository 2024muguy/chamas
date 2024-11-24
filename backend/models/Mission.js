const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  description: String,
  goals: [String],
});

module.exports = mongoose.model('Mission', missionSchema);
