const express = require('express');
const router = express.Router();

// homepage
router.get('/', (req, res) => {
  res.render('index', { title: 'Online Shopping Platform' });
});

module.exports = router;
