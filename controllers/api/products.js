const { Product } = require('../../models/product');

module.exports = {
    index,
    show,
    create,
    update,
    deleteProduct,
};

async function index(req, res) {
    try {
        const products = await Product.find({}).sort('name');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function show(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
} 

async function create(req, res) {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
}

async function update(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        product.name = req.body.name;
        product.emoji = req.body.emoji;
        product.category = req.body.category;
        product.subCategory = req.body.subCategory;
        product.tags = req.body.tags;
        product.price = req.body.price;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
}

async function deleteProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        await product.remove();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}