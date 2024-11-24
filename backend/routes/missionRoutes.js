const express = require('express');
const { getMission } = require('../controllers/missionController');

const router = express.Router();

router.get('/mission', getMission);

module.exports = router;
