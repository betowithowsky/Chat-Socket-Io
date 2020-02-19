var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log("conectado", socket.id);
  socket.on("disconnect", function() {
    console.log("desconectado");
  });

  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("conectado porta: 3000");
});
