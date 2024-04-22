const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

// Define a base user schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['customer', 'admin'], 
    required: true
  },
  // urlImage: { type: String, required: false } // icebox-profile picture
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  next();
});

const customerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  first_name: { type: String},
  last_name: { type: String},
  phone: { type: String},
});


const adminSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  first_name: { type: String },
  last_name: { type: String },
  phone: { type: String},
});

// Define models
const User = mongoose.model('User', userSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = { User, Customer, Admin };