const express = require("express");
const authController = require("../controller/auth_controller");
const router = express.Router();
const auth=require("../middleware/auth");
const blogController=require("../controller/blog_controller");
const upload = require('multer')();
const commentController=require("../controller/comment_controller");

//testing
router.get("/test", (req, res) => res.json({ "msg": "Working" }));


//auth
router.post("/register", authController.register);
router.post("/login",upload.any(), authController.login);
router.post("/logout",auth,authController.logout);
router.get("/refresh",authController.refresh);

//blog
router.post("/blog",auth,blogController.create);
router.get("/blog/all",auth,blogController.getAll);
router.get("/blog/:id",auth,blogController.getById);

router.put("/blog",auth,blogController.update);
router.delete("/blog/:id",auth,blogController.delete);

//comment
router.post("/comment",auth,commentController.create);
router.get("/comment/:id",auth,commentController.getById);


module.exports = router;