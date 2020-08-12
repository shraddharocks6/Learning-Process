const express = require("express");
const socket = require("socket.io");

//APP SETUP
const app = express();
const server = app.listen(3001, () => {
  console.log("WebSocke server listening");
});

//SERVING STATIC FILES
app.use(express.static("public"));

//SOCKET SETUP
const io = socket(server);

io.on("connection", (socket) => {
  console.log("Made Socket connection", socket.id);

  socket.on("chatMessage", (data) => {
    io.sockets.emit("chatMessage", data);
  });

  socket.on("typingMessage", (data) => {
    socket.broadcast.emit("typingMessage", data);
  });
});
