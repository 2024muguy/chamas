const Partner = require('../models/Partner');

// Fetch partners from the database
const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    if (!partners.length) {
      return res.status(404).json({ message: 'No partners data available' });
    }
    res.status(200).json(partners);
  } catch (error) {
    console.error('Error fetching partners data:', error);
    res.status(500).json({ message: 'Error fetching partners data', error });
  }
};

module.exports = {
  getPartners,
};
