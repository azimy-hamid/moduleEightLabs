const express = require("express");
const sequelize = require("./dbConfig/dbConfig.js");

const User = require("./models/User");
const Post = require("./models/Post");
const Like = require("./models/Like");
const Comment = require("./models/Comment");

const app = express();
app.use(express.json());

// Sync all models
sequelize
  .sync({ force: true }) // Use { force: true } only during development
  .then(() => {
    console.log("Database & tables created!");
  });

// Simple API Endpoints:

// Create User
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Post
app.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Like
app.post("/likes", async (req, res) => {
  try {
    const like = await Like.create(req.body);
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Likes for a Post
app.get("/posts/:postId/likes", async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { post_id: req.params.postId },
    });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Likes by User
app.get("/users/:userId/likes", async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { user_id: req.params.userId },
    });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Comment
app.post("/comments", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Comments for a Post
app.get("/posts/:postId/comments", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { post_id: req.params.postId },
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Comments by User
app.get("/users/:userId/comments", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { user_id: req.params.userId },
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
