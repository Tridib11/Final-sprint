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

let clicks = 0;
let isBlocked = false;
function rateLimiter(req, res, next) {
  if (isBlocked) {
    return res.status(403).json({
      msg: "Unwanted traffic pleae try after 5 sec",
    });
  }

  clicks++;

  if (clicks >= 5) {
    isBlocked = true;

    setTimeout(() => {
      clicks = 0;
      isBlocked = false;
    }, 5000);
    return res.status(403).json({
      msg: "Unwanted traffic pleae try after 5 sec",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  rateLimiter,
  (req, res) => {
    res.send("Your kidney health is healthy");
  }
);

app.listen(3000, (req, res) => {
  console.log("Server has started");
});
