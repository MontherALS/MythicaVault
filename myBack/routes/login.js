const express = require("express");
const router = express.Router();

const { login } = require("../controllers/login");

router.post("/LogIn", login);

module.exports = router;
