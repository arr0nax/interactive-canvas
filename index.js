var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/canvas', function(req, res){
  res.sendFile(__dirname + '/canvas.html');
});

app.get('/canvas.js', function(req, res){
  res.sendFile(__dirname + '/canvas.js');
});

app.get('/scripts.js', function(req, res, next) {
    res.sendfile(__dirname + '/scripts.js');
});

app.get('/styles.css', function(req, res, next) {
    res.sendfile(__dirname + '/styles.css');
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('message', function(msg){
    io.emit('message', msg);
  });
  socket.on('image', function(image){
    io.emit('image', image);
  });
  socket.on('shape', function(shape){
    io.emit('shape', shape);
  });
  socket.on('effect', function(effect){
    io.emit('effect', effect);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
