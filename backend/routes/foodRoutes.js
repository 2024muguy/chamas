const express = require('express');
const router = express.Router();
const { addFoodItem, getFoodItems } = require('../controllers/foodController');

router.post('/add', addFoodItem);
router.get('/', getFoodItems);

module.exports = router;
