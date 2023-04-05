const Shoe = require("./shoe");
const User = require("./user");
// const Post = require("./post");

Shoe.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Shoe, {
  foreignKey: "user_id",
});

// Post.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

module.exports = {
  User,
  Shoe,
};
