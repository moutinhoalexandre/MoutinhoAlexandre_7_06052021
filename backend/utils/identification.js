const jwt = require("jsonwebtoken"); //Permet de créer un token utilisateur

module.exports = {
  userId: function (req) {
    const token = req.headers.authorization.split(" ")[1]; //On extrait le token de la requête
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN); //On décrypte le token grâce à la clé secrète
    const userId = decodedToken.userId; //On récupère l'userId du token décrypté
    return userId;
  },
  isAdmin: function (req) {
    const token = req.headers.authorization.split(" ")[1]; //On extrait le token de la requête
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN); //On décrypte le token grâce à la clé secrète
    const isAdmin = decodedToken.is_admin; //On récupère l'userId du token décrypté
    return isAdmin;
  },
};
