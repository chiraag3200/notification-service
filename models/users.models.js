const mongoose = require('mongoose');
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    }
  },
  phone_number: {
    type: Number,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 2,
  },
  is_subscribed: {
    type: Boolean,
    default: true
  },
  token: {
    type: String
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
