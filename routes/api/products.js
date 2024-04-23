const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const { paths } = require('../../models/productSchema');



// all paths are start with /api/products
router.get("/", productsCtrl.index);
// router.post("/new", productsCtrl.create, ensureLoggedIn);
router.get("/:id", productsCtrl.show);
router.put("/:id/update", productsCtrl.update, ensureLoggedIn);
router.delete('/:id', productsCtrl.deleteProduct, ensureLoggedIn)
router.post('/new', (req, res) => { productsCtrl.create(req, res) }, ensureLoggedIn);

// GET single item by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;