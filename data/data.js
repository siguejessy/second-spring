const { type } = require("@testing-library/user-event/dist/type");
const Product = require('../models/productSchema');

const defaultProducts = [
  {
    name: 'The Great Gatsby Book',
    emoji: '📖',
    category: 'Book',
    subCategory: 'Furniture', // You can choose any subcategory here
    tags: ['Fiction', 'Classic'],
    description: 'A great book to read and enjoy.',
    price: 10,
  },
  {
    name: 'Elegant Vase',
    emoji: '🏺',
    category: 'Glassware',
    subCategory: 'Vases',
    tags: ['Home Decor', 'Glassware'],
    description: 'An elegant vase to beautify your living space.',
    price: 25,
  },
  {
    name: 'Abstract Art Painting',
    emoji: '🎨',
    category: 'Decor',
    subCategory: 'Art',
    tags: ['Art', 'Home Decor'],
    description: 'A stunning abstract art painting for your walls.',
    price: 50,
  },
];

// Function to seed default products into the database
const seedDefaultProducts = async () => {
  try {
    // Check if there are existing products, and if not, seed the default products
    const existingProducts = await Product.find();
    if (existingProducts.length === 0) {
      await Product.create(defaultProducts);
      console.log('Default products seeded successfully.');
    } else {
      console.log('Products already exist in the database. Skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding default products:', error);
  }
};

// Seed default products when this file is executed
seedDefaultProducts();