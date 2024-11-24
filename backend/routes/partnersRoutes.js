const express = require('express');
const { getPartners } = require('../controllers/partnersController');

const router = express.Router();

router.get('/partners', getPartners);

module.exports = router;
