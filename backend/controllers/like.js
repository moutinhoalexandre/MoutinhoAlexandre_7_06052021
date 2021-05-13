const { User, Post, Comment, Like } = require("../models/index");
const identification = require("../utils/identification");

exports.likePost = (req, res, next) => {
  const userId = identification.userId(req);
  const isliked = req.body.like;
  const postId = req.params.id;

  Post.findOne({ where: { id: postId } })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: "Post introuvable !" });
      } else if (isliked === true) {
        Like.create({ userId: userId, postId: postId })
          .then((like) => {
            post
              .update({ likes: post.likes + 1 })
              .then((post) => res.status(201).json({ message: "Post liké" }))
              .catch((error) =>
                res.status(500).json({ error: " Erreur update post" })
              );
          })
          .catch((error) => res.status(400).json({ error }));
      } else if (isliked === false) {
        Like.destroy({
          where: {
            userId: userId,
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
