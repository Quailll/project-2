const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    //come back if problem occurs
  },
  {
    sequelize,
  }
);

module.exports = Post;
