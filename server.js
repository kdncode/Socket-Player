const express = require('express');
const socket = require('socket.io');
const app = express();


app.use(express.static('public'));
const server = app.listen('4000',()=>{
    console.log('Server running at 4000');
});

const io = socket(server);

io.on('connection',(socket)=>{
    console.log('Connected');
    socket.on('update', (data) => {
        console.log(data);
        socket.broadcast.emit('update', data);
    });
});