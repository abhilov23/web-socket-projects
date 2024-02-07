const express = require('express');
//you cannot directly use app.listen, that's why you gonna use a http module for that
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const path = require('path')
const server = http.createServer(app); //assigning app in createServer
const io = new Server(server);
//socket.io
io.on('connection', (socket)=>{
socket.on('message', (message) => {
  io.emit('message', message);
})
})




app.use(express.static(path.resolve("./public")));

app.get('/',(req, res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(9000,console.log('server started at port 9000'));