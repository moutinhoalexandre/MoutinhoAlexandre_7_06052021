const express = require("express");
const router = express.Router(); //Permet de charger le middleware niveau router

const userCtrl = require("../controllers/user"); //On appelle la logique métier de nos routes
const authenticationLimiter = require("../middleware/authenticationLimiter"); //On appelle le middleware sauceLimiter

router.post("/signup", userCtrl.signup); //Créer un nouvel utilisateur
router.post("/login", authenticationLimiter, userCtrl.login); //Login d'un utilisateur existant

module.exports = router;
