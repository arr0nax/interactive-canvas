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

app.get('/styles.css', function(req, res, next) { res.sendfile(__dirname + '/styles.css'); });

app.get('/images/boticelli.png', function(req, res, next) { res.sendfile(__dirname + '/images/boticelli.png'); });
app.get('/images/dali.png', function(req, res, next) { res.sendfile(__dirname + '/images/dali.png'); });
app.get('/images/davinci.png', function(req, res, next) { res.sendfile(__dirname + '/images/davinci.png'); });
app.get('/images/hokusai.png', function(req, res, next) { res.sendfile(__dirname + '/images/hokusai.png'); });
app.get('/images/monet.png', function(req, res, next) { res.sendfile(__dirname + '/images/monet.png'); });
app.get('/images/picasso.png', function(req, res, next) { res.sendfile(__dirname + '/images/picasso.png'); });
app.get('/images/munch.png', function(req, res, next) { res.sendfile(__dirname + '/images/munch.png'); });
app.get('/images/meh_cat.png', function(req, res, next) { res.sendfile(__dirname + '/images/meh_cat.png'); });
app.get('/images/attack_cat.png', function(req, res, next) { res.sendfile(__dirname + '/images/attack_cat.png'); });
app.get('/images/surprise_cat.png', function(req, res, next) { res.sendfile(__dirname + '/images/surprise_cat.png'); });
app.get('/images/lazy_cat.png', function(req, res, next) { res.sendfile(__dirname + '/images/lazy_cat.png'); });
app.get('/images/classic_sheep.png', function(req, res, next) { res.sendfile(__dirname + '/images/classic_sheep.png'); });
app.get('/images/happy_sheep.png', function(req, res, next) { res.sendfile(__dirname + '/images/happy_sheep.png'); });
app.get('/images/chimp.png', function(req, res, next) { res.sendfile(__dirname + '/images/chimp.png'); });
app.get('/images/shrek.png', function(req, res, next) { res.sendfile(__dirname + '/images/shrek.png'); });
app.get('/images/mike.png', function(req, res, next) { res.sendfile(__dirname + '/images/mike.png'); });
app.get('/images/krey.png', function(req, res, next) { res.sendfile(__dirname + '/images/krey.png'); });
app.get('/images/nut.png', function(req, res, next) { res.sendfile(__dirname + '/images/nut.png'); });


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
