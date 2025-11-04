const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please tell us your name'],
    unique: true,
    trim: true,
    minLength: [8, 'A user must have a minimum of 8 characters'],
    maxLength: [40, 'A user must have a maximum of 40 characters'],
  },
  email: {
    type: String,
    require: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,

  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minLength: [8, 'A user must have a minimum of 8 characters'],
  },
  passwordConfirm: {
    type: String,
    require: [true, 'Please confirm your password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
