# Blog Backend

This repository contains the backend for a blogging platform. The backend is built with Node.js and Express, and it includes controllers, models, and routes to manage blog posts, comments, and likes. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-backend.git
   cd blog-backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the database configuration:
   - Create a `.env` file in the root directory.
   - Add your database connection details in the `.env` file. For example:
     ```env
     DB_HOST=localhost
     DB_USER=your-username
     DB_PASSWORD=your-password
     DB_NAME=your-database-name
     ```

4. Run the application:
   ```bash
   npm start
   ```

## Usage

After installation, the backend server will run on the specified port (default is 3000). You can access the API endpoints to manage blog posts, comments, and likes.

## Project Structure

The project is structured as follows:

```
blog-backend/
├── config/
│   ├── database.js
│   └── server.js
├── controllers/
│   ├── commentController.js
│   ├── likeController.js
│   └── postController.js
├── models/
│   ├── commentModel.js
│   ├── likeModel.js
│   └── postModel.js
├── routes/
│   └── blog.js
├── .env
├── package.json
└── README.md
```

### Controllers

- `commentController.js`: Handles CRUD operations for comments.
- `likeController.js`: Handles CRUD operations for likes.
- `postController.js`: Handles CRUD operations for posts.

### Models

- `commentModel.js`: Defines the schema for comments.
- `likeModel.js`: Defines the schema for likes.
- `postModel.js`: Defines the schema for posts.

### Routes

- `blog.js`: Defines the routes for the blog-related endpoints.

### Configuration

- `database.js`: Contains the database connection configuration.
- `server.js`: Contains the server setup and initialization.

## Endpoints

### Posts

- `GET /posts`: Retrieve all posts.
- `GET /posts/:id`: Retrieve a single post by ID.
- `POST /posts`: Create a new post.
- `PUT /posts/:id`: Update a post by ID.
- `DELETE /posts/:id`: Delete a post by ID.

### Comments

- `GET /posts/:postId/comments`: Retrieve all comments for a post.
- `GET /comments/:id`: Retrieve a single comment by ID.
- `POST /posts/:postId/comments`: Create a new comment for a post.
- `PUT /comments/:id`: Update a comment by ID.
- `DELETE /comments/:id`: Delete a comment by ID.

### Likes

- `GET /posts/:postId/likes`: Retrieve all likes for a post.
- `GET /likes/:id`: Retrieve a single like by ID.
- `POST /posts/:postId/likes`: Add a new like to a post.
- `DELETE /likes/:id`: Remove a like by ID.

## Configuration

To configure the application, edit the `.env` file with your database connection details. The `database.js` file contains the logic for connecting to the database using these details.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a new Pull Request.



---

Feel free to modify this README to fit your specific project requirements. If you have any questions or need further assistance, please don't hesitate to reach out.
