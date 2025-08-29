const express = require("express");
const app = express();

const isOldEnough = (age) => {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
};
app.get("/ride1", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully riden the ride",
    });
  } else {
    res.json({
      msg: "Sorry cannot ride",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
