const express = require("express");
const { userInfo,validate, signIn, signUp } = require("../controllers/UserController");
const authToken = require("../middleware/authToken")
const router = express.Router();

router.post("/signin",validate, signIn);
router.post("/signup", validate, signUp);
router.get("/user", authToken, userInfo);

module.exports = router;
