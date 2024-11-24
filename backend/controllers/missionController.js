const Mission = require('../models/Mission');

const getMission = async (req, res) => {
  try {
    const mission = await Mission.findOne();
    res.status(200).json(mission);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mission data', error });
  }
};

module.exports = {
  getMission,
};
