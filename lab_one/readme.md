# Blogging Application

This is a simple blogging application where users can create posts, like posts, and comment on posts. The application demonstrates a typical web app setup with a focus on user interactions and basic blog post functionality.

## Features

- **User Registration and Login**: Users can sign up and log in with an email and password.
- **Post Creation**: Users can create blog posts with a title, description, and an optional image.
- **Liking Posts**: Users can like posts created by other users.
- **Commenting on Posts**: Users can leave comments on posts.

## Database Schema

### Logical Model

The logical model is available [here](https://lucid.app/lucidchart/c27a09c5-bfcd-49bf-980a-2cbc04107d0c/edit?viewport_loc=-92%2C-1095%2C2648%2C1267%2C0_0&invitationId=inv_c38dbbd7-59e3-4ee3-8e88-730dd6f38c1a).

### Physical Model

The physical model is defined in the `schema.sql` file located in the same folder as this README file.

## Setup Instructions

### Prerequisites

- MySQL

### Database Setup

1. **Create a database named `blogapp`**.
2. **Run the SQL schema**: Use the `schema.sql` file to create the necessary tables for users, posts, likes, and comments.
