const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const chalk = require('chalk');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: }));
app.use(express.json());

// Log colors using chalk
const log = {
  server: chalk.blueBright,  
  db: chalk.greenBright,    
  react: chalk.hex('#FFA500'), 
  error: chalk.redBright,    
};

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(log.db('✅ Connected to MongoDB')))
  .catch((err) => console.error(log.error('❌ Database connection error:', err)));

// Routes
const routes = [
  { path: '/api/items', route: require('./routes/itemRoutes') },
  { path: '/api/events', route: require('./routes/eventRoutes') },
  { path: '/api/email', route: require('./routes/emailRoutes') },
  { path: '/api/bank', route: require('./routes/bankRoutes') },
  { path: '/api/mpesa', route: require('./routes/mpesaRoutes') },
  { path: '/api/paypal', route: require('./routes/paypalRoutes') },
  { path: '/api/food', route: require('./routes/foodRoutes') },
  { path: '/api/groups', route: require('./routes/groupRoutes') },
  { path: '/api/auth', route: require('./routes/authRoutes') },
  { path: '/api/mentorship', route: require('./routes/mentorshipRoutes') },
  { path: '/api/missions', route: require('./routes/missionRoutes') },
  { path: '/api/partners', route: require('./routes/partnersRoutes') },
  { path: '/api/promotions', route: require('./routes/promotionsRoutes') },
  { path: '/api/chamas', route: require('./routes/chamaRoutes') },
];

// Use all routes dynamically
routes.forEach(({ path, route }) => {
  console.log(log.server(`📄 Setting up route: ${path}`)); // Log route setup
  app.use(path, route);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(log.server(`🌐 Server running on port ${PORT}`));
});

// Example of logging React app start (if part of the same process)
console.log(log.react('🚀 React app is ready at http://localhost:3000'));

// Error Handling Middleware (Optional, for demonstration)
app.use((err, req, res, next) => {
  console.error(log.error(`❌ Error: ${err.message}`));
  res.status(500).json({ message: 'Internal Server Error' });
});
