const express = require("express");
const app = express();

// const isOldEnough = (age) => {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age
  if (age > 18) {
    next();
  } else {
    res.json({
      msg: "Ja na be cutiye badhh me ana"
    });
  }
}

app.use(isOldEnoughMiddleware);
app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride",
  });
});


app.listen(3000, () => {
  console.log("Server started");
});
