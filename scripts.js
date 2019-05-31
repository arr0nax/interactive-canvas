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
  $('#effectDuplicate').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('effect', 'duplicate');
    console.log('duplicate');
    return false;
  });
  $('#imageInput').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('image', $('#image_url').val());
    console.log('image', $('#image_url').val());
    return false;
  });

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
