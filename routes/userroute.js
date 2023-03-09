const router = require("express").Router();
const { CreateUser } = require("../controllers/user.controller");

router.post("/createuser", CreateUser);

module.exports = router;
