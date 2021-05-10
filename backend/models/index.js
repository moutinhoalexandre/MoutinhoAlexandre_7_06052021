const User = require("../models/user");
const Post = require("../models/post");

User.hasMany(Post, { onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

module.exports = { User, Post };