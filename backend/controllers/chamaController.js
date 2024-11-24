const Chama = require('../models/chamaModel.js');
const User = require('../models/userModel.js');

// Fetch all Chamas
const getChamas = async (req, res) => {
  try {
    const chamas = await Chama.find(); // Fetch all Chamas from the database
    res.status(200).json(chamas);
  } catch (error) {
    console.error('Error fetching Chamas:', error.message);
    res.status(500).json({ message: 'Error fetching Chamas' });
  }
};

// Register for a Chama (already provided)
const registerForChama = async (req, res) => {
  const { chamaId } = req.params;
  const { name, email, phone } = req.body;

  try {
    const chama = await Chama.findById(chamaId);
    if (!chama) {
      return res.status(404).json({ message: 'Chama not found' });
    }

    const newUser = new User({
      name,
      email,
      phone,
      chama: chamaId,
    });

    await newUser.save();

    chama.members.push(newUser._id); // Add user to the Chama's members list
    await chama.save();

    res.status(201).json({
      message: 'Registration successful',
      user: newUser,
      chama,
    });
  } catch (error) {
    console.error('Registration failed:', error.message);
    res.status(500).json({ message: 'Registration failed' });
  }
};

module.exports = { getChamas, registerForChama };
