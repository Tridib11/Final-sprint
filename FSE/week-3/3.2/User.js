const express = require("express");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

const app = express();
const SECRET = "ROHANTU CHUTIYA H";

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.ksun8sc.mongodb.net/user")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userModel = mongoose.model("Users", {
  username: String,
  password: String,
});

app.use(express.json());

async function userExists(username, password) {
  const user = await userModel.findOne({ username, password });
  return user;
}

app.post("/signin", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await userExists(username, password);
  if (user == null) {
    return res.status(403).json({
      msg: "Doesnot exists in the db",
    });
  }

  const token = JWT.sign({ username }, SECRET);

  return res.status(200).json({
    token: token,
  });
});

app.post("/signup", async function (req, res) {
  const { username, password } = req.body;

  try {
    const person = await userModel.create({
      username: username,
      password: password,
    });
    res.status(201).json(person, {
      msg: "User created succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.get("/users", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = JWT.verify(token, SECRET);

    const username = decoded.username;

    const user = await userModel.find({username});
    return res.status(200).json({
      user,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
