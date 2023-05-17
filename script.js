var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;




// Here I am going to set the speed
var incrementor = 1;


function Square() {
  ctx.fillStyle = "pink";
  ctx.fillRect(x, 100, 150, 150);

  ctx.fillStyle = "red";
  ctx.fillRect(10, y, 250, 250);

  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, 150, 150);
}


function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Square();

  

  /* Here I am creating a simple while statement. 
   The statement says that x is added to incrmentor (speed)
   if the incrementor is greater than canvas width or 
   incrementor is less than 0 then make whatever the current
   number for incrementor negative */

  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;

  console.log(incrementor + "  incrementor value");
}

setInterval(drawBoxxy, 10);

