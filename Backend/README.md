# Blog Post Backend

This is the backend API for the **Blog Post** platform, built using **Node.js** and **Express.js**. The backend handles user authentication, blog post management, and statistics for the platform. It also provides RESTful endpoints for interacting with the system.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)

## Features

- **User Authentication**: Sign up, login, and manage user sessions.
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **Statistics**: Provides statistics on user interactions and post performance.
- **Secure API Endpoints**: Protected routes for certain operations (e.g., user management, posting).

## Technologies

- **Node.js**: JavaScript runtime used for building the backend server.
- **Express.js**: Web framework used for routing and middleware handling.
- **MongoDB**: Database for storing user data, posts, and statistics.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## File Structure

```
/Backend
│
├── /controllers            # Business logic for routes
│   ├── authController.js    # Handles user authentication
│   ├── postsController.js   # Handles CRUD operations on blog posts
│   └── userController.js    # Manages user data
│   └── statisticsController.js # Manages statistical data
│
├── /models                 # Mongoose models for MongoDB
│   ├── userModel.js         # User schema and model
│   └── postsModel.js        # Blog post schema and model
│   └── statisticsModel.js   # Statistics schema and model
│
├── /routes                 # API routes
│   ├── authRoutes.js        # Routes for user authentication
│   ├── postsRoutes.js       # Routes for blog post CRUD
│   └── statisticsRoutes.js  # Routes for statistics
│
├── /utils                  # Utility functions
│   ├── auth.js              # Middleware for authentication
│   └── errorHandler.js      # Centralized error handling
│
├── app.js                  # Main application file
└── server.js               # Starts the server
```

## Installation

To set up the backend on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mwangi-Jack/blog_post.git
   cd Backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```
   PORT=3001
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

## Running the Application

To run the application locally:

```bash
npm start
```

The backend server will be available at: `http://localhost:3001`

## API Routes

### Authentication Routes (`/auth`)
- **POST /auth/signup**: Create a new user
- **POST /auth/login**: Login user and generate a token

### Blog Post Routes (`/posts`)
- **GET /posts**: Retrieve all blog posts
- **GET /posts/:id**: Retrieve a specific blog post by ID
- **POST /posts**: Create a new blog post (protected)
- **PUT /posts/:id**: Update a blog post by ID (protected)
- **DELETE /posts/:id**: Delete a blog post by ID (protected)

### User Routes (`/users`)
- **GET /users**: Get all users (admin)
- **GET /users/:id**: Get user by ID (admin)
- **DELETE /users/:id**: Delete a user (admin)

### Statistics Routes (`/statistics`)
- **GET /statistics/posts**: Get statistics on blog posts
- **GET /statistics/users**: Get user-related statistics

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

- **PORT**: The port on which the server will run (default: 3001).
- **MONGO_URI**: Connection string for your MongoDB database.

## Error Handling

All API routes return errors in the following format:

```json
{
  "status": "error",
  "message": "Description of the error"
}
```

Errors are centrally handled using the middleware defined in `/utils/errorHandler.js`.

