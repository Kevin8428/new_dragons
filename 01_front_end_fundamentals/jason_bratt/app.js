var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function randomLine() {
  ctx.beginPath();
  var x = Math.floor(Math.random() * 1400);
  var y = Math.floor(Math.random() * 1400);
  ctx.moveTo(x, y);
  ctx.lineTo(Math.random() * 50, Math.random() * 50);
  ctx.strokeStyle = randomColor();
  ctx.stroke();
}
var gx = 500, gy = 500;
function movingLine() {
  if (gx < 0) {
    gx = 0;
    gy = 0;
  }
  var plusminus = Math.random();
  if (plusminus > 0.5) {
    var x = gx + Math.floor(Math.random() * 150);
    var y = gx + Math.floor(Math.random() * 55);
  } else {
    x = gx - Math.floor(Math.random() * 45);
    y = gx - Math.floor(Math.random() * 55);
  }
  console.log(x, y);
  ctx.beginPath();
  ctx.moveTo(gx, gy);
  gx = x;
  gy = y;
  ctx.lineTo(x, y);
  ctx.strokeStyle = randomColor();
  ctx.stroke();
}

function randomColor() {
  var red = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var opacity = Math.random();
  var color = 'rgba(' opacity + ',' + red + ',' + blue + ',' + green + ')';
  return color;
}

function randomRect() {
  ctx.fillStyle = randomColor();
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  ctx.fillRect(x, y, Math.random() * 40 + 10, Math.random() * 40 + 10)
}

setInterval(function() {
  movingLine();
}, 10);
