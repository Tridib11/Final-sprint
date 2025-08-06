const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Tridib" && password != "pass") {
    res.status(403).json({
      msg: "Sorry user not authorised",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyID = parseInt(req.query.kidneyID);
  if (kidneyID != 1 && kidneyID != 2) {
    res.status(403).json({
      msg: "Incorrent inputs",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney health is healthy");
});

app.listen(3000, (req, res) => {
  console.log("Server has started");
});
