// controllers/itemController.js
const Item = require('../models/Item');

// Add a new item
exports.addItem = async (req, res) => {
  try {
    const { title, category, price, image, date } = req.body;
    const newItem = new Item({ title, category, price, image, date });
    await newItem.save();
    res.status(201).json({ message: 'Item added successfully', item: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item', error });
  }
};

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};

// Get items by category
exports.getItemsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const items = await Item.find({ category });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items by category', error });
  }
};
