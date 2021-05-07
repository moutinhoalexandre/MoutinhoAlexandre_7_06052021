const express = require("express");
const router = express.Router(); //Permet de charger le middleware niveau router

const userCtrl = require("../controllers/user"); //On appelle la logique métier de nos routes

//TODO const authenticationLimiter = require("../middleware/authenticationLimiter"); //On appelle le middleware authentificationLimiter

router.post("/signup", userCtrl.signup); //Créer un nouvel utilisateur
router.post("/login", userCtrl.login); //Login d'un utilisateur existant TODO:authenticationLimiter

module.exports = router;
