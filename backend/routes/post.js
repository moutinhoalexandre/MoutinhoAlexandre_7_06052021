const express = require("express"); // pour importer application Express
const router = express.Router(); // pour créer un routeur Express

const auth = require("../middleware/auth"); // pour importer le middleware auth
const multer = require("../middleware/multer-config"); // pour importer le middleware multer
const postCtrl = require("../controllers/post"); // pour importer le controleur


router.post("/", auth, multer, postCtrl.createPost);//Créer un post
router.post('/:id', auth, multer, postCtrl.modifyPost);//Modifie un post existant
router.delete('/:id', auth, postCtrl.deletePost);//Supprime un post existant
router.post('/:id', auth, postCtrl.getOnePost);//Récupérer un post


module.exports = router;
