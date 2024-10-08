// imports
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Init
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server);
const port = 3001;

// connections
io.on('connection', socket => {
  console.log('a user connected');
  socket.on('chat message', msg => {
    console.log('Message ' + msg);
    io.emit("chat message",msg)
  });
});

server.listen(port, () => {
  console.log('Server running on port ' + port);
});
