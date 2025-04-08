const fs = require('fs');
const path = require('path');

// get the path to the products.json file
const productsFilePath = path.join(__dirname, '../data/products.json');

// read and load products from the file
const loadProducts = () => {
  try {
    const data = fs.readFileSync(productsFilePath);
    return JSON.parse(data); // turn the json into a usable array
  } catch (err) {
    return []; // if the file doesn't exist or something goes wrong, just start with an empty list
  }
};

// save the current list of products to the file
const saveProducts = (products) => {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2)); // pretty print for easier reading
};

// keep products in memory and set the next id based on the last product
let products = loadProducts();
let idCounter = products.length ? products[products.length - 1].id + 1 : 1;

// show all products
exports.getAllProducts = (req, res) => {
  res.render('products', { title: 'Product List', products });
};

// display one product by its id
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.render('productDetail', { title: 'Product Details', product });
};

// create a brand new product
exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price) {
    return res.status(400).send('Name and price are required');
  }
  const product = {
    id: idCounter++,
    name,
    price,
    description
  };
  products.push(product);
  saveProducts(products); // update the file
  res.redirect('/products');
};

// load the edit form with the current product info
exports.editProductForm = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.render('editProduct', { title: 'Edit Product', product });
};

// update a product's info
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  const { name, price, description } = req.body;
  if (!name || !price) {
    return res.status(400).send('Name and price are required');
  }
  product.name = name;
  product.price = price;
  product.description = description;
  saveProducts(products); // update the file
  res.redirect('/products');
};

// remove a product from the list
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  saveProducts(products); // update the file
  res.redirect('/products');
};
