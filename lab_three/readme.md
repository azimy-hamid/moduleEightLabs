# Lab Three Module Eight

This project implements a simple blogging application using Sequelize and MySQL. It allows users to create accounts, write blog posts, and interact with other users through comments and likes. The application exposes a RESTful API for easy interaction.

## Features

- User registration and authentication
- Creating, reading, updating, and deleting blog posts
- Commenting on blog posts
- Liking blog posts

## Technology Stack

- **Node.js**: JavaScript runtime for building server-side applications
- **Express.js**: Web framework for Node.js
- **Sequelize**: Promise-based Node.js ORM for MySQL
- **MySQL**: Relational database management system
- **dotenv**: Module to load environment variables from a `.env` file

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) (v5.7 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**:

   git clone https://github.com/yourusername/LabThreeModuleEight.git
   cd LabThreeModuleEight

2. **Install Dependencies:**:

npm install

3. **Create a .env file in the root directory with the following content:**

DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_DIALECT=mysql

4. **Create the database in MySQL if it doesn't already exist.**

5. **Run the application:**

npm start

## API Endpoints

### Users

- **POST /api/users**: Create a new user
- **GET /api/users**: Get all users

### Posts

- **POST /api/posts**: Create a new post
- **GET /api/posts**: Get all posts
- **GET /api/posts/:id**: Get a specific post
- **PUT /api/posts/:id**: Update a post
- **DELETE /api/posts/:id**: Delete a post

### Comments

- **POST /api/comments**: Add a comment to a post
- **GET /api/comments/:postId**: Get comments for a specific post

### Likes

- **POST /api/likes**: Like a post
- **GET /api/likes/:postId**: Get likes for a specific post
