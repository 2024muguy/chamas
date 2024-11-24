const express = require('express');
const router = express.Router();
const { getMentorshipSessions } = require('../controllers/mentorshipController');

router.get('/sessions', getMentorshipSessions);

module.exports = router;
