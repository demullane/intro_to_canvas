var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height }

function drawBorder(){
  context.strokeRect(0,0, size.x, size.y);
}

function fillRectangle(){
  context.fillStyle = 'blue';
  context.fillRect(0, 0, size.x/2, size.y/2);
}

drawBorder();
