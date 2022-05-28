const express = require("express");
const router = express.Router();
const { singuppost, signupget } = require("../Controllers/NewUser");
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.get("/api/newuser", signupget);

router.post("/api/newuser", singuppost);

module.exports = router;
