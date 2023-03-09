const { User } = require("../database/database");

exports.CreateUser = async (req, res) => {
  const { user_id, email } = req.body;

  const createUser = await User.create({
    user_id,
    username,
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.json("ok");
};
