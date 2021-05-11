const { User, Post, Comment, Like } = require("../models/index");
const fs = require("fs"); //système de gestion de fichier de Node
const jwt = require("jsonwebtoken");

// Créer un post
exports.createPost = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; //On extrait le token de la requête
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN); //On décrypte le token grâce à la clé secrète
  const userId = decodedToken.userId; //On récupère l'userId du token décrypté
  Post.create({
    UserId: userId,
    image: req.file? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`: null, //On génère l'url grâce à son nom de fichier
    content: req.body.content,
    likes: 0,
    comments: 0,
  })
    .then(() => res.status(201).json({ message: "Post enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//Modifier un post
exports.modifyPost = (req, res, next) => {
  const id = req.params.id;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const userId = decodedToken.userId;
  Post.findOne({ where: { id: id } })
    .then(post => {
      if(post.UserId === userId) {
        if (req.file) {
          if (post.image !== null){
              const fileName = post.image.split('/images/')[1];
              fs.unlink(`images/${fileName}`, (err => {
                  if (err) console.log(err);
                  else {
                      console.log("Image supprimée: " + fileName);
                  }
              }));
          }
          req.body.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        }
        post.update( { ...req.body, id: req.params.id} )
        .then(() => res.status(200).json({ message: 'Votre post est modifié !' }))
        .catch(error => res.status(400).json({ error }));
      }else {
        return res.status(401).json({ error: "Vous n'avez pas l'autorisation nécessaire !" });
      }
    })
    .catch(error => res.status(500).json({ error }));
};

//Supprimer un post
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
  const userId = decodedToken.userId;
  const isAdmin = decodedToken.is_admin;
  Post.findOne({ where: { id: id } })
    .then(post => {
      if(post.UserId == userId || isAdmin == true) {
        if (post.image !== null){
            const fileName = post.image.split('/images/')[1];
            fs.unlink(`images/${fileName}`, (err => {
                if (err) console.log(err);
                else {
                    console.log("Image supprimée: " + fileName);
                }
            }));
        }
        post.destroy({ where: { id: id } })
          .then(() => res.status(200).json({  message: 'post supprimé !' }))
          .catch(error => res.status(400).json({ error }));
      }else {
        return res.status(401).json({ error: "Vous n'avez pas l'autorisation nécessaire !" });
      }
    })
    .catch(error => res.status(500).json({ error }));
};

//Afficher un post
exports.getOnePost = (req, res, next) => {
  Post.findOne({ id: req.params.id })
  .then(post => res.status(200).json(post))
  .catch(error => res.status(404).json({ error }));
};

//Afficher tous les posts
exports.getAllPosts = (req, res, next) => {
    Post.findAll({
        include: [{
            model: User
        }, {
            model: Comment,
            include: [{
                model: User
            }],
        }],
        order: [[
            "createdAt", "DESC"
        ]]
    })
        .then(posts => res.status(200).json(posts))
        .catch(error => {
            console.log(error);
            res.status(400).json({ error });
        });
};