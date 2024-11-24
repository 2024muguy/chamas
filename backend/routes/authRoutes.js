const express = require('express');
const router = express.Router();
const { login, register, logout, authenticate, getUserInfo } = require('../controllers/authController');

// Routes
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

// Protected route to get user info (requires authentication)
router.get('/userinfo', authenticate, getUserInfo);

module.exports = router;
