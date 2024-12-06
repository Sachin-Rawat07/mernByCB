# Shopping Sam App

**Shopping Sam App** is a full-stack e-commerce web application that provides users with a seamless shopping experience. It features product listings, user authentication, reviews, cart management, and an intuitive UI powered by EJS templates. The app is built using modern web technologies such as Node.js, Express, MongoDB, and Passport.js for user authentication.

---

## Features

- **User Authentication**: Secure login and registration using Passport.js with session management.
- **Product Management**: View, create, update, and delete products.
- **Review System**: Add, edit, and delete reviews for products.
- **Cart Functionality**: Add and manage items in the cart.
- **Flash Messages**: User feedback with success and error messages.
- **Responsive UI**: Dynamic frontend rendered using EJS templates.
- **RESTful API**: Modular and scalable API for managing products.

---

## Tech Stack

### Backend
- **Node.js** with **Express.js**
- **MongoDB** (Mongoose as ODM)
- **Passport.js** for authentication
- **dotenv** for environment variables
- **connect-mongo** for session store
- **method-override** for supporting RESTful PUT and DELETE methods

### Frontend
- **EJS** for templating
- **CSS** and **JavaScript** for styling and interactivity

---

## Prerequisites

Ensure you have the following installed:
- Node.js (>= 16.x)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sachin-Rawat07/mernByCB/tree/main/lc-practice/E-Commerce
   cd shopping-sam-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   dbURL=mongodb://localhost:27017/shopping-sam-app
   SECRET=yourSecretKey
   NODE_ENV=development
   ```

4. Seed the database (optional):
   ```bash
   node seed.js
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. Visit the application at `http://localhost:5000`.

---

## Project Structure

```
shopping-sam-app/
├── models/                # Database models (User, Product, Review)
├── routes/                # Express routes
│   ├── api/               # API routes
│   │   └── productapi.js
│   ├── auth.js            # Authentication routes
│   ├── cart.js            # Cart management routes
│   ├── payment.js         # Payment-related routes
│   ├── product.js         # Product-related routes
│   └── review.js          # Review management routes
├── controllers/           # Controller logic (Product controller)
├── public/                # Static assets (CSS, JS)
├── views/                 # Frontend pages (EJS templates)
├── .env                   # Environment variables (not included in repo)
├── middleware.js          # Custom middleware functions
├── schema.js              # Validation schemas
├── seed.js                # Script to seed the database
├── index.js               # Main server file
└── package.json           # Node.js dependencies and scripts
```

---

## Key Files

### Models
- **User.js**: Defines user schema and Passport.js authentication methods.
- **Product.js**: Manages product data.
- **Review.js**: Manages product reviews.

### Routes
- **auth.js**: Handles user registration, login, and logout.
- **cart.js**: Manages user cart operations.
- **payment.js**: Handles payment-related operations (stubbed for now).
- **product.js**: CRUD operations for products.
- **review.js**: CRUD operations for reviews.
- **productapi.js**: API routes for product management.

### Views
- Dynamic EJS templates for pages like:
  - Home
  - Product listing
  - Cart
  - Login and Signup

---

## Middleware

- **methodOverride**: Allows HTTP verbs like PUT and DELETE.
- **connect-flash**: Flash messages for user feedback.
- **passport.js**: Authentication middleware.

---

## Environment Variables

| Variable   | Description                                | Default Value                           |
|------------|--------------------------------------------|-----------------------------------------|
| `dbURL`    | MongoDB connection string                 | `mongodb://localhost:27017/shopping-sam-app` |
| `SECRET`   | Secret key for sessions                   | `weneedabettersecretkey`                |
| `NODE_ENV` | Application environment                   | `development`                           |

---

## Future Improvements

- Add payment gateway integration.
- Implement product categories.
- Add wishlist functionality.
- Improve responsiveness with modern CSS frameworks.

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---


