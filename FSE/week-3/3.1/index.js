const express = require("express");
const app = express();

function userMiddleware(req,res,next){

}

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Tridib" && password != "pass") {
    res.status(403).json({
      msg: "User doesnot exist",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong Inputs",
    });
    return;
  }

  res.send("your heart is healthy");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
