const { User, Post, Comment, Like } = require("../models/index");
const fs = require("fs"); //système de gestion de fichier de Node
const jwt = require("jsonwebtoken");

exports.likePost = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const user = decodedToken.userId;
  const isliked = req.body.like;
  const postId = req.params.id;

  Post.findOne({ where: { id: postId } })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: "Post introuvable !" });
      } else if (isliked === false) {
        Like.create({ userId: user, postId: postId })
          .then((like) => {
            post
              .update({ likes: post.likes + 1 })
              .then((post) => res.status(201).json({ message: "Post liké" }))
              .catch((error) =>
                res.status(500).json({ error: " Erreur update post" })
              );
          })
          .catch((error) => res.status(400).json({ error }));
      } else if (isliked === true) {
        Like.destroy({
          where: {
            userId: user,
            PostId: postId,
          },
        })
          .then((like) => {
            post
              .update({ likes: post.likes - 1 })
              .then((post) => res.status(201).json({ message: "Post disliké" }))
              .catch((error) =>
                res.status(500).json({ error: " Erreur update post" })
              );
          })
          .catch((error) =>
            res.status(400).json({ message: "problème destroy like" })
          );
      }
    })
    .catch((error) => res.status(400).json({ message: "erreur destroy" }));
};
