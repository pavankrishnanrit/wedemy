const router = require("express").Router();
const { CreateUser, GetUser } = require("../controllers/user.controller");

router.post("/createuser", CreateUser);
router.get("/getuser/:email",GetUser)
module.exports = router;
