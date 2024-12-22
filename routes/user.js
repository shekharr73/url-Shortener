const express = require("express");
const userController = require("../controllers/user");
const { handleUserLogin, handleUserSignup } = userController;

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);


module.exports = router;
