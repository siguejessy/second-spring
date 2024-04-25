require('dotenv').config();
require('./config/database');


// https://source.unsplash.com/random/300x300/?vase

const Product = require('./models/productSchema');

const defaultProducts = [
  {
    name: 'The Great Gatsby Book',
    emoji: '📖',
    category: 'Book',
    subCategory: 'Furniture', // You can choose any subcategory here
    tags: ['Fiction', 'Classic'],
    description: 'A great book to read and enjoy.',
    price: 10,
    image: 'https://source.unsplash.com/random/200x200/?great-gatsby-book',
  },
  {
    name: 'Elegant Vase',
    emoji: '🏺',
    category: 'Glassware',
    subCategory: 'Vases',
    tags: ['Home Decor', 'Glassware'],
    description: 'An elegant vase to beautify your living space.',
    price: 25,
    image: 'https://source.unsplash.com/random/200x200/?vase',
  },
  {
    name: 'Abstract Art Painting',
    emoji: '🎨',
    category: 'Decor',
    subCategory: 'Art',
    tags: ['Art', 'Home Decor'],
    description: 'A stunning abstract art painting for your walls.',
    price: 50,
    image: 'https://source.unsplash.com/random/200x200/?',
  },
  {
    name: 'Wooden Chair',
    emoji: '🪑',
    category: 'Furniture',
    subCategory: 'Chairs',
    tags: ['Home Decor', 'Furniture'],
    description: 'A comfortable wooden chair for your home.',
    price: 75,
    image: `https://source.unsplash.com/random/200x200/?wooden-chair`,
  },
  {
    name: 'Vintage Mirror',
    emoji: '🪞',
    category: 'Decor',
    subCategory: 'Mirrors',
    tags: ['Vintage', 'Home Decor'],
    description: 'A beautiful vintage mirror to add charm to your space.',
    price: 60,
    image: `https://source.unsplash.com/random/200x200/?vintage-mirror`,
  },
  {
    name: 'Martini Glass Set',
    emoji: '🍸',
    category: 'Glassware',
    subCategory: 'Glass Sets',
    tags: ['Barware', 'Glassware'],
    description: 'A set of stylish martini glasses for your bar.',
    price: 40,
    image: `https://source.unsplash.com/random/200x200/?martini-glass-set`,
  },
  {
    name: 'Sleek Sofa',
    emoji: '🛋️',
    category: 'Furniture',
    subCategory: 'Sofas',
    tags: ['Home Decor', 'Furniture'],
    description: 'A sleek and modern sofa for your living room.',
    price: 300,
    image: `https://source.unsplash.com/random/200x200/?sleek-sofa`,
  },
  {
    name: 'Antique Clock',
    emoji: '⏰',
    category: 'Decor',
    subCategory: 'Clocks',
    tags: ['Vintage', 'Home Decor'],
    description: 'An antique clock to add character to your room.',
    price: 100,
    image: `https://source.unsplash.com/random/200x200/?antique-clock`,
  },
  {
    name: 'Cozy Throw Blanket',
    emoji: '🛏️',
    category: 'Decor',
    subCategory: 'Blankets',
    tags: ['Home Decor', 'Bedding'],
    description: 'A cozy throw blanket for chilly evenings.',
    price: 35,
    image: `https://source.unsplash.com/random/200x200/?cozy-blanket`,
  },
  {
    name: 'Golden Picture Frame',
    emoji: '🖼️',
    category: 'Decor',
    subCategory: 'Frames',
    tags: ['Home Decor', 'Art'],
    description: 'A golden picture frame to display your memories.',
    price: 20,
    image: `https://source.unsplash.com/random/200x200/?golden-frame`,
  },
  {
    name: 'Rustic Side Table',
    emoji: '🌳',
    category: 'Furniture',
    subCategory: 'Tables',
    tags: ['Home Decor', 'Furniture'],
    description: 'A rustic side table made from reclaimed wood.',
    price: 80,
    image: `https://source.unsplash.com/random/200x200/?rustic-table`,
  },
  {
    name: 'Modern Ceiling Lamp',
    emoji: '💡',
    category: 'Decor',
    subCategory: 'Lamps',
    tags: ['Home Decor', 'Lighting'],
    description: 'A modern ceiling lamp to illuminate your space.',
    price: 120,
    image: `https://source.unsplash.com/random/200x200/?ceiling-lamp`,
  },
  {
    name: 'Vintage Tea Set',
    emoji: '🍵',
    category: 'Glassware',
    subCategory: 'Tea Sets',
    tags: ['Vintage', 'Home Decor'],
    description: 'A vintage tea set for elegant tea parties.',
    price: 50,
    image: `https://source.unsplash.com/random/200x200/?vintage-tea-set`,
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