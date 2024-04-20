const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  username: {type: String, required: true},
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
    default: 'customer'
  },
  // Add the user's full name, address, and phone number
  details: {
  full_name: { type: String, required: true },
  street_address: { type: String, required: true},
  zip: { type: String, required: true }, 
  phone: { type: String, required: true },
  },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Favorite', unique: [true, "Already added to your Favorites List"] }],
  inquiries: [{ type: Schema.Types.ObjectId, ref: 'Inquiry', unique: [true, "Already added to your Inquiries List"] }],
},{
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user document
  if (!this.isModified('password')) return next();
  // Replace the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);

// Define admin schema
const adminSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  // role: { //Ice box adding employee role
  //   type: String,
  //   enum: ['admin'],
  //   default: 'admin'
  // }
});

// Define models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = { User, Admin };