const Food = require('../models/foodModel');
const { sendEmailNotification } = require('../utils/emailUtils');

exports.addFoodItem = async (req, res) => {
  const { title, price, image, date } = req.body;
  try {
    const newFoodItem = new Food({ title, price, image, date });
    await newFoodItem.save();
    
    // Send email notification after adding new item
    sendEmailNotification({ title, price });
    
    res.status(201).json({ message: 'Food item added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding food item' });
  }
};

exports.getFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching food items' });
  }
};
