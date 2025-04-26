# StoryStack: A Next-Gen Blogging Website

## Purpose
StoryStack is a modern blogging platform where users can create, manage, and engage with blogs. It features user authentication, blog management, and a dynamic UI.

## Live URL
[Live Site](https://story-stack-d45ff.web.app/)

## Key Features
- **Authentication**: Secure login with email/password and Google authentication.
- **Blog Management**: Users can add, update blog.
- **Wishlist**: Add blogs to a personal wishlist. Delete blog from wishlist if needed.
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop).
- **Comments**: Users can comment on blogs (excluding their own).
- **Newsletter**: Subscribe to the newsletter with confirmation.
- **Private Routes**: Protected routes for authenticated users.

## Tech Stack
- **Frontend**: React, TailwindCSS, Framer Motion, React Router, Material UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase

## Deployment
- **Client**: Hosted on Firebase
- **Server**: Hosted on Vercel

## Pages
- **Home Page**: Displays recent blogs, newsletter, and a hero section.
- **All Blogs Page**: Displays all blogs with filters and search.
- **Blog Details Page**: Full blog content with comments and update options.
- **Add Blog Page**: Form to add new blogs.
- **Wishlist Page**: Shows wishlisted blogs with remove option.
- **Featured Blogs**: Tops 10 blogs based on the word count of the description.

## Authentication
- Firebase login/signup (email/password + Google).
- Private routes for authenticated users (e.g., Add Blog, Wishlist).

## Security
- Environment variables for Firebase and MongoDB credentials.
- JWT Authentication for secure private routes.

## NPM Packages Used

### Client-Side NPM Packages:
- **@mui/material**: Material-UI components for React.
- **@tanstack/react-table**: A powerful and flexible table library for React.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Lottie-react**: A React component for Lottie animations.
- **Motion**: Library for creating animations in React with Framer Motion.
- **React-fast-marquee**: A fast marquee component for React.
- **React-hot-toast**: A library to show toast notifications in React apps.
- **React-icons**: A library to use SVG icons in React applications.
- **React-intersection-observer**: React implementation of the Intersection Observer API for lazy loading and animations.
- **React-loading-skeleton**: React component for displaying skeleton loading screens.
- **React-photo-view**: A React component for viewing images in full-screen mode.
- **Sweetalert2**: A library for displaying customizable pop-up alerts in the app.

### Server-Side NPM Packages:
- **Express**: A fast, unopinionated web framework for Node.js to handle routing and middleware.
- **MongoDB**: MongoDB Node.js driver to interact with MongoDB databases.
- **Cookie-parser**: Middleware to parse cookies in HTTP requests.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing (CORS), allowing the server to communicate with different domains.
- **Dotenv**: A module to load environment variables from a `.env` file for secure configuration management.
- **JSONWebToken (JWT)**: A library for creating and verifying JSON Web Tokens used for secure authentication.
