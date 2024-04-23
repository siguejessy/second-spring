// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Customer = require('./models/user');
const Product = require('./models/product');
const Category = require('./models/category');
const Admin = require('./models/user')
const Inquiry = require('./models/inquiry')

// Local variables will come in handy for holding retrieved documents
let user, customer, product, category, admin, inquiry;
let users, products, categories, customers, admins, inquiries;
