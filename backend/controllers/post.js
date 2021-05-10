const { User, Post, Comment, Like } = require("../models/index");
const fs = require("fs"); //système de gestion de fichier de Node
const jwt = require("jsonwebtoken");

// Créer un post
exports.createPost = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const userId = decodedToken.userId;  
  Post.create ({
    UserId: userId,
    image: (req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null),//On génère l'url grâce à son nom de fichier
    content: req.body.content,
    likes: 0,
    comments:0
  })
  .then(() => res.status(201).json({ message: 'Post enregistré !' }))
  .catch(error => res.status(400).json({ error }));
};