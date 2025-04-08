const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// set up stuff that handles data coming in from forms or json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


// tell express to use pug for the html templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// let express serve files like css, js, and images from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/products', productRouter);

// start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
