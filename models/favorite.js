//copied from the sei order.js file

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');


const favoriteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

module.exports = mongoose.model('Favorite', favoriteSchema);