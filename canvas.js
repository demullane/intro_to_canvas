var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height }

function drawBorder(){
  context.strokeRect(0, 0, size.x, size.y);
}

function fillRectangle(){
  context.fillStyle = 'blue';
  context.fillRect(0, 0, size.x/2, size.y/2);
}

function randomRectangle(color){
  context.fillStyle = color;
  var randX = Math.round(Math.random() * (size.x - 1));
  var randY = Math.round(Math.random() * (size.y - 1));
  var randW = (randX - Math.round(Math.random() * (size.x - 1))) + 1;
  var randH = (randY - Math.round(Math.random() * (size.y - 1))) + 1;
  context.fillRect(randX, randY, randW, randH);
}

function clearCanvas(){
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();
}

drawBorder();
