const Product = require('../../models/productSchema');

module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByName, // removed from my routes. come back to add in future
};

async function getAll(req, res) {
    try {
        const products = await Product.find({}).sort('name');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createProduct(req, res) {
  try {
    const newProduct = await Product.create({ ...req.body, created_by: req.user._id });
    console.log('Product created:', newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}
async function updateProduct(req, res) {
  try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (err) {
      res.status(500).json({ error: 'Failed to update product', message: err.message });
  }
}


async function deleteProduct(req, res) {
    try {
      const deleteProduct = await Product.findByIdAndDelete(req.params.id);
      res.json(deleteProduct);
    } catch (error) {
      console.log(error);
    }
  }
  
    async function getProductsByName(req, res) {
        try {
            const products = await Product.find({ name: req.params.name });
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
