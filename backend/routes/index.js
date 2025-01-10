const express = require("express");
const authController = require("../controller/auth_controller");
const router = express.Router();
const auth=require("../middleware/auth");
const blogController=require("../controller/blog_controller");
//testing
router.get("/test", (req, res) => res.json({ "msg": "Working" }));


//auth
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout",auth,authController.logout);
router.get("/refresh",authController.refresh);

//blog
router.post("/blog",auth,blogController.create);
router.get("/blog/all",auth,blogController.getAll);
router.get("/blog/:id",auth,blogController.getById);

router.put("/blog/:id",auth,blogController.update);
router.delete("/blog/:id",auth,blogController.delete);


module.exports = router;