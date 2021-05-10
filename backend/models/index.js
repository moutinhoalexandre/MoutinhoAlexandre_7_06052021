const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

User.hasMany(Post, { onDelete: "CASCADE" });

Post.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
Post.hasMany(Comment, { onDelete: "CASCADE" });

Comment.belongsTo(Post, { foreignKey: "postId", onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

module.exports = { User, Post };