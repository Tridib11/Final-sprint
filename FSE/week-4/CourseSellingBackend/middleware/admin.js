const { Admin } = require("../db/db");
const { JWT_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  const token = req.headers.authorizaition;
  const words = token.split(" ");
  const jwtToken = words[1];

  try {
    const decodedValue = jwtToken.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
  // const username = req.headers.username;
  // const password = req.headers.password;

  // Admin.findOne({
  //   username,
  //   password,
  // }).then((value) => {
  //   if (value) {
  //     next();
  //   } else {
  //     res.status(403).json({
  //       msg: "Admin doesnot exist",
  //     });
  //   }
  // });
}

module.exports = adminMiddleware;
