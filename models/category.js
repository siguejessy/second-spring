const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  subCategories: [{ type: Schema.Types.ObjectId, ref: 'SubCategory' }],
  sortOrder: Number
}, {
  timestamps: true
});

const subCategorySchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  sortOrder: Number
}, {
  timestamps: true
});

const tagSchema = new Schema({
  name: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});

// Define models
const Category = mongoose.model('Category', categorySchema);
const SubCategory = mongoose.model('SubCategory', subCategorySchema);
const Tag = mongoose.model('Tag', tagSchema);

module.exports = { Category, SubCategory, Tag };