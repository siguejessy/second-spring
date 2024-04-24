const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const productsCtrl = require('../../controllers/api/products');
const Product = require('../../models/productSchema');

// Define routes for products
router.get('/', productsCtrl.getAll);
router.post('/new', productsCtrl.createProduct, ensureLoggedIn);
router.delete('/:id', productsCtrl.deleteProduct);
router.put('/:id', productsCtrl.updateProduct);

module.exports = router;
