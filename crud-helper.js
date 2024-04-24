// Used to perform CRUD external to the application

// To use (don't type the $'s):
//   1. Open a Node REPL in Terminal:
//         $ node

//   2. Load this crud-helper.js module
//         $ .load crud-helper.js

//   3. When done CRUDing, exit the REPL with:
//         $ .exit (or ctrl-D, or ctrl-C twice)

// If any changes are made to the models, 
// exit the REPL and reload this module

// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Product = require('./models/product');
const Category = require('./models/category');
const Inquiry = require('./models/inquirySchema')

// Local variables will come in handy for holding retrieved documents
let user, customer, product, category, admin, inquiry;
let users,categories, customers, admins, inquiries;

async function fetchProducts() {
  let products = await Product.find({});
  console.log(products);
}

fetchProducts();