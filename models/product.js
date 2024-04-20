const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating product queries)
require('./category');
const productSchema = require('./productSchema');

const Product = mongoose.model('Product', productSchema);

module.exports = { Product, productSchema };
