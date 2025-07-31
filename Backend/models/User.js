const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  url: String,
  uploadedAt: { type: Date, default: Date.now }
});

const otpSchema = new mongoose.Schema({
  code: String,
  expiresAt: Date
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: profileSchema,
  otp: otpSchema
});

module.exports = mongoose.model('User', userSchema);
