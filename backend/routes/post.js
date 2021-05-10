const express = require("express"); // pour importer application Express
const router = express.Router(); // pour créer un routeur Express

const auth = require("../middleware/auth"); // pour importer le middleware auth
const multer = require("../middleware/multer-config"); // pour importer le middleware multer
const postCtrl = require("../controllers/post"); // pour importer le controleur


router.post("/", auth, multer, postCtrl.createPost);//Créer un post


module.exports = router;
