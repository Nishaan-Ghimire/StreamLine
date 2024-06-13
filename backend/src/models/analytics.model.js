const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  totalUserCount: {
    type: Number,
    default: 0,
  },
  totalVerifiedUserCount: {
    type: Number,
    default: 0,
  },
  loginCount: {
    type: Number,
    default: 0,
  },
  TotalLoggedInUsers:{
    type: Number,
    default: 0,
  }
  
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
