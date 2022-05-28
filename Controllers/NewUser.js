// this is for new user (:
const { User } = require("../Models/Newuser");
const bodyparser = require("body-parser");
const signupget = (req, res) => {
  res.json({
    status: 1,
  });
};

const singuppost = async (req, res) => {
  const { username, email, password } = JSON.stringify(req.body);

  const user = new User({
    username: username,
    email: email,
    password: password,
  });
  await user
    .save()
    .then(() => {
      console.log(user);
      res.json({
        req: 1,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  signupget,
  singuppost,
};
