// routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const { sendEmailNotification } = require('../controllers/emailController');

router.post('/send-email', async (req, res) => {
  const { item } = req.body;
  await sendEmailNotification(item);
  res.status(200).json({ message: 'Email sent successfully' });
});

module.exports = router;
