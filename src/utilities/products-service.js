const { Product } = require('../../models/product');

module.exports = {
    getAll,
    create,
    updateProduct,
    deleteProduct,
    getProductsByName,
    getProductById,
};

async function getAll(req, res) {
    try {
        const products = await Product.find({}).sort('name');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function create(req, res) {
    try {
      const createProduct = await Product.create({ ...req.body, user: req.user._id });
      res.json(createProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(req, res) {
    try{
         await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({ message: 'Product updated successfully' });
    }catch (err){
        res.json(err);
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
    
    async function getProductById(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }