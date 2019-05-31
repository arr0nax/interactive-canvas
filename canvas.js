var messages = [];

$(function () {
  console.log('hello');
  var socket = io();
  socket.on('message', function(msg){
    messages.push(new Message(msg));
    console.log(messages);
  });
  socket.on('effect', function(effect){
    if (effect === 'duplicate') {
      const orig = messages[Math.floor(Math.random() * messages.length)];
      let clone = Object.assign( Object.create( Object.getPrototypeOf(orig)), orig)
      clone.reposition();
      messages.push(clone);
      console.log(messages);
    }
  });
  socket.on('image', function(url){
    messages.push(new Imagec(url));
    console.log(messages);
  });
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
}

function draw() {
  // background(255/2*sin(frameCount/110)+255/2,255/2*sin(frameCount/120)+255/2, 255/2*sin(frameCount/130)+255/2);
  drawMessages();
}

function drawMessages() {
  const color1 = sinColor1();
  const color2 = sinColor2();
  for (var i=0;i<messages.length;i++) {
    if (messages[i].type === 'text') {
      stroke(color1.r, color1.g, color1.b);
      strokeWeight(2);
      fill(color2.r, color2.g, color2.b);
      text(messages[i].text, messages[i].position.x, messages[i].position.y);
    } else if (messages[i].type === 'image' && messages[i].ready) {
      image(messages[i].picture, messages[i].position.x, messages[i].position.y, 100, 100);
    }
    messages[i].position.y = messages[i].position.y + messages[i].velocity.y;
    messages[i].position.x = messages[i].position.x + messages[i].velocity.x
    if (messages[i].position.y > windowHeight + 100 || messages[i].position.y < -100 || messages[i].position.x > windowWidth + 100 || messages[i].position.x < -100) {
      messages.splice(i, 1);
    }
  }
}

class Boid {
  constructor() {
    this.type = null;
    this.position = centeredStartingPosition();
    this.velocity = createVector(randomGaussian(0, .3), randomGaussian(0, .3));
  }
}
class Message extends Boid {
  constructor(text) {
    super();
    this.text = text;
    this.type = 'text';

  }
}

class Shape extends Boid {
  constructor(shape) {
    super();
    this.type = 'shape';
    
  }
}

class Imagec extends Boid {
  constructor(text) {
    super();
    this.type = 'image';
    this.ready = false;
    this.url = text;
    console.log(text);
    loadImage(text, img => {
      this.picture = img;
      this.ready = true;
      console.log(this.picture);
    });
  }
}

Boid.prototype.reposition = function () {
  this.position = createVector(Math.random() * windowWidth, Math.random() * windowHeight);
  this.velocity = createVector(randomGaussian(0, .3), randomGaussian(0, .3));
};

function determineType(text) {

}

function centeredStartingPosition() {
  return createVector((Math.random() * (windowWidth / 2)) + (windowWidth / 4), (Math.random() * (windowHeight / 2)) + (windowHeight / 4));
}

function sinColor1() {
  return {
    r: (255/2*sin((frameCount)/110)+255/2),
    g: (255/2*sin((frameCount)/120)+255/2),
    b: (255/2*sin((frameCount)/130)+255/2)
  }
}

function sinColor2() {
  return {
    r: (255/2*sin((frameCount)/120)+255/2),
    g: (255/2*sin((frameCount)/130)+255/2),
    b: (255/2*sin((frameCount)/140)+255/2)
  }
}
