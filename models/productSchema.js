const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  emoji: { type: String, required: true },
  category: {type: String, required: true},
  subCategory: {type: String},
  tags: [{type: String}],
  description: { type: String, required: true },
  price: { type: Number, required: true },

}, {
  timestamps: true,
  created_by: {type: Schema.Types.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Product', productSchema);