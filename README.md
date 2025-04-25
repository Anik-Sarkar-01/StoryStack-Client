# StoryStack: A Next-Gen Blogging Website

## Purpose
StoryStack is a modern blogging platform where users can create, manage, and engage with blogs. It features user authentication, blog management, and a dynamic UI.

## Live URL
[Your Live Site](https://story-stack-d45ff.web.app/)

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

