//MAKE CONNECTION
const socket = io.connect("http://localhost:3001");

//QUERY DOM
var message = document.getElementById("message"),
  username = document.getElementById("handel"),
  btn = document.getElementById("send"),
  output = document.getElementById("output"),
  feedback = document.getElementById("feedback");

//EMIT EVENTS
btn.addEventListener("click", () => {
  socket.emit("chatMessage", {
    message: message.value,
    username: username.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typingMessage", username.value);
});

//LISTENING FOR EVENTS
socket.on("chatMessage", (data) => {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.username + ":</strong>" + data.message + "</p>";
});

socket.on("typingMessage", (data) => {
  feedback.innerHTML = "<p><em>" + data + " is tping a message ... </em></p>";
});
