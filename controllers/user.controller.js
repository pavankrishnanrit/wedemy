const { User } = require("../database/database");

exports.CreateUser = async (req, res) => {
  const { username, email } = req.body;

  const createUser = await User.create({
    email,
    username,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.json("ok");
};

// exports.GetUser = async (req, res) => {
//   const { email } = req.params;
//   console.log(email);
//   const getUser = await User.findOne({
//     where: { email: email },
//   }).then((resp) => {
//     res.json(resp);
//   });
// };


exports.GetUser = async (req, res) => {
  const { email } = req.params;
  console.log(email);
  const getuser = await User.findOne({where: {email: email} }).then((response) => {
    res.json(response);
  });
};