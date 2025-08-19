const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET = "Chup";

const app = express();

const ALL_USERS = [
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

}


app.listen(3000,()=>{
  console.log("Server has been started")
})
