# MoviePulse Documentation

**Project Name**: Blog Post
**Description**: Blog Post is a blogging platform that enables sharing of expertise and knowledge across all disciplines.


---

## Table of Contents:
1. [Frontend](#frontend)
   - [Frameworks](#frameworks)
   - [Components](#components)
   - [APIs Integration](#apis-integration)
2. [Backend](#backend)
   - [Database](#database)
   - [API Endpoints](#api-endpoints)
3. [Installation and Setup](#installation-and-setup)

---

## Frontend

The Blog Post frontend is built using **ReactJS** and styled with **Tailwind CSS** for efficient and flexible UI design.

### Frameworks

- **ReactJS**: The main framework used for building the user interface. React allows for a modular, component-based architecture, making the app easy to maintain and scale.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid styling of the app's components without writing custom CSS.

### Components

The key components that make up the user interface include:

1. **User Login/Register Forms**:
   - A set of forms for user authentication (Login and Registration). These are only required for users who wish to publish their blog posts on the platform
   - Uses **form validation** for username and password input.

2. **Landing Page**:
   - Displays a list of blogs to the user
   - Blog posts are displayed in a responsive grid layout, optimized for both desktop and mobile views.


4. **Navigation**:
   - The app provides easy-to-navigate routes for different pages, including the home page, blogs page, about page, and the contacts page.

> **Note**: Users can view and read posts without logging in. However, to publish a post, the user must first log in or create an account.

---

## APIs Integration

MoviePulse integrates two main APIs to deliver movie-related data and enhance search capabilities:

### 1. **Gemini AI API**:
   - Gemini provides access to a AI generated texts to enable users auto generate blog posts



   **Example of a Gemini API Request**:
   ```javascript
   const GEMINI_API_KEY = 'your-gemini-api-key';
   axios.get(`https://api.gemini.com/search?query=write a blog with the title how to land an aircraft safely&api_key=${GEMINI_API_KEY}`);
   ```

---


## Installation and Setup

### Requirements:
- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

### Installation:
#### Frontend
   -  Full installation Instructions [Here](./Frontend/README.md)

#### Backend
   - Full installation instructions [Here](./Backend/README.md)
---
