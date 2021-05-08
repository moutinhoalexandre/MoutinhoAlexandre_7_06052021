const express = require("express");
const router = express.Router(); //Permet de charger le middleware niveau router

const userCtrl = require("../controllers/user"); //On appelle la logique métier de nos routes
const multer = require("../middleware/multer-config");

const authentificationLimiter = require("../middleware/authentificationLimiter"); //On appelle le middleware authentificationLimiter

router.post("/signup", userCtrl.signup); //Créer un nouvel utilisateur
router.post("/login", authentificationLimiter, userCtrl.login); //Login d'un utilisateur existant TODO:authenticationLimiter

router.put("/profile/:id", multer, userCtrl.modifyUser); //Modifier un utilisateur

module.exports = router;
