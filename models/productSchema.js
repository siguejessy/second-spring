const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  emoji: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  subCategory: {type: Schema.Types.ObjectId, ref: 'SubCategory'},
  tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = productSchema;
