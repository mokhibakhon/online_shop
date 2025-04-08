
# Online Shopping Platform

## About the App
Welcome to my Online Shopping Platform! This project is a hands-on web application built with Node.js, Express, and Pug. I created it to practice and demonstrate essential web development skills—specifically CRUD operations for products (you can add, see, edit, and delete them) along with robust server-side validation using **express-validator**. The app is lightweight, functional, and designed for academic use only (it doesn't represent a real business).

## How to Run the App Locally

If you’d like to set this up on your own machine, just follow these steps:

1. **Clone the Repository:**

   Open your terminal and run:
   ```bash
   git clone https://github.com/mokhibakhon/online_shop.git
   cd online_shop
   ```

2. **Install the Dependencies:**

   Run:
   ```bash
   npm install
   ```
   This command will fetch and install all the necessary packages, including extra modules like **body-parser** and **express-validator**.

3. **Start the Server:**

   To launch the app using nodemon (which restarts the server automatically when you change a file), run:
   ```bash
   npm run dev
   ```
   Once it’s running, open your web browser and navigate to [http://localhost:3001](http://localhost:3001).

4. **Explore:**

   You’re now free to browse the platform, test out the product management features, and see how everything works together.

## Application Dependencies
Here’s a quick rundown of the main packages used in this project:
- **express:** A powerful web framework for Node.js that handles routing and more.
- **pug:** A template engine that makes dynamic HTML generation a breeze.
- **body-parser:** Middleware for parsing incoming request bodies (though Express now includes much of this functionality).
- **express-validator:** Provides a clean, declarative way to handle server-side input validation.
- **nodemon:** A tool that helps during development by auto-restarting the server on changes.

## Repository and Deployment
For your convenience and further exploration:
- **GitHub Repository:** [https://github.com/mokhibakhon/online_shop.git](https://github.com/mokhibakhon/online_shop.git)
- **Hosted Application:**  https://online-shop-9np3.onrender.com/  
  *(Remember to replace this with your actual live deployment link once available!)*

## Project Structure
Here’s an overview of how the project is organized. This structure helps keep the project clean and maintainable:
```
online-shopping-platform/
├── controllers/                 # contains the controller logic to handle requests and responses (for product-related operations using express and crud methods)
│   └── productController.js     # handles product-specific routes and business logic (crud operations)
├── data/                        # stores data files like json databases for quick and simple data management
│   └── products.json            # a json file acting as an in-memory database for storing product info
├── node_modules/                # holds installed npm packages (managed automatically by npm)
├── public/                      # contains assets for the client, such as css, js, and images
│   └── styles/                  # houses css files for styling the front end
│       └── style.css            # the main css file that defines the website's visual design
├── routes/                      # defines the url endpoints for the app, directing requests to appropriate controllers
│   ├── index.js                 # manages general routes including the homepage (entry point)
│   └── products.js              # handles product-related routes like listing, adding, editing, and deleting products
├── services/                    # contains the business logic separate from route handling, improving code reusability
│   └── productService.js        # centralizes product logic and data manipulation
├── views/                       # contains pug templates for dynamic html rendering
│   ├── editProduct.pug          # template for editing an existing product
│   ├── index.pug                # template for the homepage
│   ├── layout.pug               # the main template that provides a common layout (header, footer, etc.)
│   ├── newProduct.pug           # template for adding a new product
│   ├── productDetail.pug        # template for displaying detailed information of a single product
│   └── products.pug             # template for listing all products in a formatted view
├── .gitignore                   # specifies files and folders git should ignore (for example, node_modules)
├── app.js                       # the main server file that configures the express app, middleware, and routes
├── package-lock.json            # locks the specific versions of installed packages for consistency
├── package.json                 # configuration file that lists dependencies, metadata, and npm scripts
└── README.md                    # contains project documentation like setup instructions, features, and usage details

```
Installed packages: Express, Pug, Body-parser, Method-override, Express-validator, Nodemon, Dotenv, UUID

## Final Thoughts
This project is my take on a basic yet fully functional online shopping platform built with Express.js. The structure is organized to keep concerns separated: routes, controllers, validators, and views all have their own places. Even though **node_modules** is excluded via .gitignore, all dependencies can be easily installed by running `npm install`.
