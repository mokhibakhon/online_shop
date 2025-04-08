const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// list all products
router.get('/', productController.getAllProducts);

// / display the form to add a new product
router.get('/new', (req, res) => {
  res.render('newProduct', { title: 'Add New Product' });
});

// create new product
router.post('/', productController.createProduct);

// load product details
router.get('/:id', productController.getProductById);

// show form to edit an existing product
router.get('/:id/edit', productController.editProductForm);

// update product
router.put('/:id', productController.updateProduct);

// delete product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
