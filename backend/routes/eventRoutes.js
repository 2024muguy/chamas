// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const { getEvents } = require('../controllers/eventController');

router.get('/', getEvents);  // Get all events

module.exports = router;
