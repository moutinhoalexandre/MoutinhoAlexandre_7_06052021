const { User, Post, Comment, Like } = require("../models/index");
const fs = require("fs");
const jwt = require("jsonwebtoken");

//Commenter un post
exports.createComment = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const user = decodedToken.userId;
  const postId = req.params.id;
  const content = req.body.content;
  console.log(content);
  if (content !== null) {
    Comment.create({
      UserId: user,
      PostId: postId,
      content: req.body.content,
    }),
      Post.findOne({ where: { id: postId } }) //On sélectionne le post par son id
        .then((post) => {
          post
            .update(
              {
                comments: post.comments + 1, //on ajoute 1 au comments
              },
              { id: postId }
            )
            .then(() =>res.status(200).json({ message: "Nouveau commentaire envoyé !" }))
            .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(400).json({ error })); // jshint ignore:line
  } else {
    return res.status(401).json({ error: "Commentaire non valide" });
  }
};