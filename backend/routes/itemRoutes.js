// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const { addItem, getItems, getItemsByCategory } = require('../controllers/itemController');

router.post('/add', addItem);  // Add new item
router.get('/', getItems);  // Get all items
router.get('/category/:category', getItemsByCategory);  // Get items by category

module.exports = router;
