const { JWT_SECRET } = require("../config");
const { User } = require("../db/db");

function userMiddleware(req, res, next) {
  const token = req.headers.authorizaition;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwtToken.verify(jwtToken, JWT_SECRET);
  if (decodedValue.username) {
    req.username = decodedValue.username;
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }

  // const username = req.headers.username;
  // const password = req.headers.password;

  // User.findOne({
  //   username,
  //   password,
  // }).then((value) => {
  //   if (value) {
  //     next();
  //   } else {
  //     res.status(403).json({
  //       msg: "User doesnot exist",
  //     });
  //   }
  // });
}

module.exports = userMiddleware;
