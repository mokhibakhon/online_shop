const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/products.json');

// checks if JSON file exists
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, '[]');
}

function loadProducts() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products file:', error);
    return [];
  }
}

function saveProducts(products) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error saving products file:', error);
  }
}

module.exports = {
  getAll: (req, res) => loadProducts(),

  getById: (req, res) => {
    const id = parseInt(req.params.id);
    const products = loadProducts();
    return products.find(product => product.id === id);
  },

  create: async (req, res) => {
    const { name, price, description } = req.body;
    if (!name || !price) throw new Error('Name and price are required');

    const products = loadProducts();
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      price,
      description
    };
    products.push(newProduct);
    saveProducts(products);
    return newProduct;
  },

  update: (req, res) => {
    const id = parseInt(req.params.id);
    const products = loadProducts();
    const index = products.findIndex(product => product.id === id);
    if (index === -1) return null;

    const { name, price, description } = req.body;
    products[index] = { ...products[index], name, price, description };
    saveProducts(products);
    return products[index];
  },

  delete: (req, res) => {
    const id = parseInt(req.params.id);
    let products = loadProducts();
    const index = products.findIndex(product => product.id === id);
    if (index === -1) return false;

    products = products.filter(product => product.id !== id);
    saveProducts(products);
    return true;
  }
};