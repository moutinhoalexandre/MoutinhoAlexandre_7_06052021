const { User, Post, Comment, Like } = require("../models/index");
const fs = require("fs");
const jwt = require("jsonwebtoken");

//Commenter un post
exports.createComment = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const user = decodedToken.userId;
  const postId = req.body.postId;
  const content = req.body.content;
  if (content !== null) {
    Comment.create({
      userId: user,
      postId: postId,
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

//Supprimer un post
exports.deleteComment = (req, res, next) => {
  const id= req.params.id;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const userId = decodedToken.userId;
  const isAdmin = decodedToken.is_admin;
  Comment.findOne({ where: { id: id } })
    .then(comment => {
      if (comment.userId == userId || isAdmin == true) {
          Post.findOne({ where: { id: comment.postId } }).then((post) => {
            post
              .update(
                {
                  comments: post.comments - 1, //on supprime 1 au comments
                },
                { id: comment.postId }
              )
              .then(() =>
                res.status(200).json({ message: "Commentaire supprimé !" })
              )
              .catch((error) => res.status(400).json({ error }));
          }),
            comment
              .destroy({ where: { id: id } })
              .catch((error) => res.status(400).json({ error })); // jshint ignore:line
      } else {
        return res.status(401).json({ error: "Vous n'avez pas l'autorisation nécessaire !" });
      }
    })
    .catch(error => res.status(500).json({ error:"Le commentaire recherché n'existe pas" }));

};