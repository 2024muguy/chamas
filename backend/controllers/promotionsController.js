const Promotion = require('../models/Promotion');

const getPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.status(200).json(promotions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching promotions data', error });
  }
};

module.exports = {
  getPromotions,
};
