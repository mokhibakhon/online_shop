
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
├── controllers/
│   └── productController.js
├── data/
│   └── products.json
├── node_modules/            
├── public/
│   └── styles/
│       └── style.css
├── routes/
│   ├── index.js
│   └── products.js
├── services/
│   └── productService.js
├── views/
│   ├── editProduct.pug
│   ├── index.pug
│   ├── layout.pug
│   ├── newProduct.pug
│   ├── productDetail.pug
│   └── products.pug
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```
Installed packages: Express, Pug, Body-parser, Method-override, Express-validator, Nodemon, Dotenv, UUID

## Final Thoughts
This project is my take on a basic yet fully functional online shopping platform built with Express.js. The structure is organized to keep concerns separated: routes, controllers, validators, and views all have their own places. Even though **node_modules** is excluded via .gitignore, all dependencies can be easily installed by running `npm install`.
