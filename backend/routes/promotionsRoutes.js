const express = require('express');
const { getPromotions } = require('../controllers/promotionsController');

const router = express.Router();

router.get('/promotions', getPromotions);

module.exports = router;
