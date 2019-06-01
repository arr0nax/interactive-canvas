var messages = [];

$(function () {
  console.log('hello');
  var socket = io();
  $('#textInput').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('message', $('#m').val());
    console.log('message');
    return false;
  });
  $('#effectDuplicate').submit(function(e){e.preventDefault();socket.emit('effect', 'duplicate');return false;});
  $('#effectRotate').submit(function(e){e.preventDefault();socket.emit('effect', 'rotate');return false;});
  $('#effectStopRotate').submit(function(e){e.preventDefault();socket.emit('effect', 'stop_rotate');return false;});
  $('#effectGravity').submit(function(e){e.preventDefault();socket.emit('effect', 'gravity');return false;});
  $('#effectStopGravity').submit(function(e){e.preventDefault();socket.emit('effect', 'stop_gravity');return false;});
  $('#effectScaleUp').submit(function(e){e.preventDefault();socket.emit('effect', 'scale_up');return false;});
  $('#effectScaleDown').submit(function(e){e.preventDefault();socket.emit('effect', 'scale_down');return false;});
  $('#imageInput').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('image', $('#image_url').val());
    console.log('image', $('#image_url').val());
    return false;
  });
  $('#emoji1').submit(function(e){e.preventDefault();socket.emit('message', '🐑');return false;});
  $('#emoji2').submit(function(e){e.preventDefault();socket.emit('message', '🤔');return false;});
  $('#emoji3').submit(function(e){e.preventDefault();socket.emit('message', '🍆');return false;});
  $('#emoji4').submit(function(e){e.preventDefault();socket.emit('message', '🍑');return false;});
  $('#emoji5').submit(function(e){e.preventDefault();socket.emit('message', '😘');return false;});
  $('#emoji6').submit(function(e){e.preventDefault();socket.emit('message', '😳');return false;});
  $('#emoji7').submit(function(e){e.preventDefault();socket.emit('message', '😩');return false;});
  $('#emoji8').submit(function(e){e.preventDefault();socket.emit('message', '💻');return false;});
  $('#emoji9').submit(function(e){e.preventDefault();socket.emit('message', '🥀');return false;});
  $('#emoji10').submit(function(e){e.preventDefault();socket.emit('message', '🌹');return false;});
  $('#emoji11').submit(function(e){e.preventDefault();socket.emit('message', '👌');return false;});
  $('#emoji12').submit(function(e){e.preventDefault();socket.emit('message', '🗿');return false;});
  $('#emoji13').submit(function(e){e.preventDefault();socket.emit('message', '💦');return false;});
  $('#emoji14').submit(function(e){e.preventDefault();socket.emit('message', '🌊');return false;});
  $('#emoji15').submit(function(e){e.preventDefault();socket.emit('message', '🌎');return false;});
  $('#emoji16').submit(function(e){e.preventDefault();socket.emit('message', '🏳');return false;});
  $('#emoji17').submit(function(e){e.preventDefault();socket.emit('message', '🙈');return false;});
  $('#emoji18').submit(function(e){e.preventDefault();socket.emit('message', '🙉');return false;});
  $('#emoji19').submit(function(e){e.preventDefault();socket.emit('message', '💥');return false;});
  $('#emoji20').submit(function(e){e.preventDefault();socket.emit('message', '💫');return false;});
  $('#emoji21').submit(function(e){e.preventDefault();socket.emit('message', '🦆');return false;});
  $('#emoji22').submit(function(e){e.preventDefault();socket.emit('message', '🐙');return false;});
  $('#emoji23').submit(function(e){e.preventDefault();socket.emit('message', '🐛');return false;});
  $('#emoji24').submit(function(e){e.preventDefault();socket.emit('message', '🦐');return false;});
  $('#emoji25').submit(function(e){e.preventDefault();socket.emit('message', '🦀');return false;});
  $('#emoji26').submit(function(e){e.preventDefault();socket.emit('message', '🌚');return false;});
  $('#emoji27').submit(function(e){e.preventDefault();socket.emit('message', '🌝');return false;});
  $('#emoji28').submit(function(e){e.preventDefault();socket.emit('message', '💌');return false;});
  $('#emoji29').submit(function(e){e.preventDefault();socket.emit('message', '💾');return false;});
  $('#emoji30').submit(function(e){e.preventDefault();socket.emit('message', '💿');return false;});
  $('#emoji31').submit(function(e){e.preventDefault();socket.emit('message', '⛓');return false;});
  $('#emoji32').submit(function(e){e.preventDefault();socket.emit('message', '⚰');return false;});
  $('#image1').submit(function(e){e.preventDefault();socket.emit('image', 'boticelli');return false;});
  $('#image2').submit(function(e){e.preventDefault();socket.emit('image', 'dali');return false;});
  $('#image3').submit(function(e){e.preventDefault();socket.emit('image', 'davinci');return false;});
  $('#image4').submit(function(e){e.preventDefault();socket.emit('image', 'hokusai');return false;});
  $('#image5').submit(function(e){e.preventDefault();socket.emit('image', 'monet');return false;});
  $('#image6').submit(function(e){e.preventDefault();socket.emit('image', 'picasso');return false;});
  $('#image7').submit(function(e){e.preventDefault();socket.emit('image', 'munch');return false;});
  $('#image8').submit(function(e){e.preventDefault();socket.emit('image', 'meh_cat');return false;});
  $('#image9').submit(function(e){e.preventDefault();socket.emit('image', 'attack_cat');return false;});
  $('#image10').submit(function(e){e.preventDefault();socket.emit('image', 'surprise_cat');return false;});
  $('#image11').submit(function(e){e.preventDefault();socket.emit('image', 'lazy_cat');return false;});
  $('#image12').submit(function(e){e.preventDefault();socket.emit('image', 'classic_sheep');return false;});
  $('#image13').submit(function(e){e.preventDefault();socket.emit('image', 'happy_sheep');return false;});
  $('#image14').submit(function(e){e.preventDefault();socket.emit('image', 'chimp');return false;});
  $('#image15').submit(function(e){e.preventDefault();socket.emit('image', 'shrek');return false;});
  $('#image16').submit(function(e){e.preventDefault();socket.emit('image', 'mike');return false;});
  $('#image17').submit(function(e){e.preventDefault();socket.emit('image', 'krey');return false;});
  $('#image18').submit(function(e){e.preventDefault();socket.emit('image', 'nut');return false;});


});

function exit() {
  var x = document.getElementsByClassName("input");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function showText() {
  var x = document.getElementById("text");
  x.style.display = "flex";
}

function showShapes() {
  var x = document.getElementById("shapes");
  x.style.display = "flex";
}

function showEffects() {
  var x = document.getElementById("effects");
  x.style.display = "flex";
}

function showImages() {
  var x = document.getElementById("images");
  x.style.display = "flex";
}

function hideText() {
  var x = document.getElementById("text");
  x.style.display = "none";
}

function hideShapes() {
  var x = document.getElementById("shapes");
  x.style.display = "none";
}

function hideEffects() {
  var x = document.getElementById("effects");
  x.style.display = "none";
}

function hideImages() {
  var x = document.getElementById("images");
  x.style.display = "none";
}
