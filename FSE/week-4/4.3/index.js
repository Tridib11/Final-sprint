const express = require("express");
const app = express();

const adminRouter = require("../4.3/routes/admin");
const userRouter = require("../4.3/routes/user");

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server started lol");
});
