const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET = "Chup";

const app = express();

let ALL_USERS = [
  {
    username: "rohan@mail.com",
    password: "123",
    name: "Tridib",
  },
  {
    username: "alice@example.com",
    password: "alicepass",
    name: "Alice",
  },
  {
    username: "bob@example.com",
    password: "bobpass",
    name: "Bob",
  },
  {
    username: "charlie@example.com",
    password: "charliepass",
    name: "Charlie",
  },
];

function userExists(username, password) {
  return ALL_USERS.some(
    (user) => user.username === username && user.password === password
  );
}
app.get("/check", (req, res) => {
  res.send({
    msg: "Working",
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  try {
    const verify = jwt.verify(token, SECRET);
    const users = ALL_USERS.map((user) => user.name);
    return res.json(users);
  } catch (err) {
    return res.status(401).json({
      msg: "User unauthorized",
    });
  }
});

app.use(express.json());

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "Sorry user doesnot exists or wrong password",
    });
  } else {
    var token = jwt.sign({ username }, SECRET);
    return res.status(200).json({
      msg: `Welcome ${username}`,
      token: token,
    });
  }
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  if (!username || !password || !name) {
    return res.status(403).json({
      msg: "Hey! please enter the necessary fields",
    });
  } else if (userExists(username, password)) {
    return res.status(403).json({
      msg: "Username already exsits",
    });
  } else {
    ALL_USERS = [...ALL_USERS, req.body];
    return res.status(200).json({
      msg: "User added successfully",
    });
  }
});

app.listen(3000, () => {
  console.log("Server has been started");
});
