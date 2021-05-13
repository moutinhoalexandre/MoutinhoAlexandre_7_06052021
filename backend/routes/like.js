const express = require("express"); // pour importer application Express
const router = express.Router(); // pour créer un routeur Express

const auth = require("../middleware/auth"); // pour importer le middleware auth
const multer = require("../middleware/multer-config"); // pour importer le middleware multer
const likeCtrl = require("../controllers/like"); // pour importer le controleur

router.post("/post/:id", auth, likeCtrl.likePost); //like un post

module.exports = router;