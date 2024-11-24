const express = require('express');
const router = express.Router();
const { getGroups, joinGroup } = require('../controllers/groupController');

router.get('/', getGroups);
router.post('/join', joinGroup);

module.exports = router;
