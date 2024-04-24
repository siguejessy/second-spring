const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const productsCtrl = require('../../controllers/api/products');
const Product = require('../../models/productSchema');

// Define routes for products
router.get('/', productsCtrl.getAll);
router.post('/new', productsCtrl.createProduct, ensureLoggedIn);
router.delete('/:id', productsCtrl.deleteProduct);
router.put('/:id', productsCtrl.updateProduct, ensureLoggedIn);

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
