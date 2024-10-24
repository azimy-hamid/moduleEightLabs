// models/Post.js
const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig/dbConfig.js");

const User = require("./User");

const Post = sequelize.define(
  "Post",
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Set up the relationship
Post.belongsTo(User, { foreignKey: "author_id", onDelete: "CASCADE" });

module.exports = Post;
