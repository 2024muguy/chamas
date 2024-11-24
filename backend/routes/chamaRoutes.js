const express = require('express');
const { getChamas, registerForChama } = require('../controllers/chamaController.js');

const router = express.Router();

// Fetch all Chamas
router.get('/', getChamas);

// Register for a Chama
router.post('/register/:chamaId', registerForChama);

module.exports = router;
