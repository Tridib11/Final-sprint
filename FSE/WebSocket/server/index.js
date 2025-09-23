// index.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" } // allow any client for now
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // when client sends a message
  socket.on("chat message", (msg) => {
    console.log("Message:", msg);

    // broadcast to everyone (including sender)
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
