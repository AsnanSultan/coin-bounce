const express = require("express");
const authController = require("../controller/auth_controller");
const router = express.Router();
const auth=require("../middleware/auth");
//testing
router.get("/test", (req, res) => res.json({ "msg": "Working" }));


router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout",auth,authController.logout);


module.exports = router;