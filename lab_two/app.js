const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const Like = require("./models/Like");
const Comment = require("./models/Comment");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/ModuleEightLabTwo", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes

// Create a new user
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// Create a new post
app.post("/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).send(post);
});

// Like a post
app.post("/likes", async (req, res) => {
  const like = new Like(req.body);
  await like.save();
  res.status(201).send(like);
});

// Comment on a post
app.post("/comments", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.status(201).send(comment);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
