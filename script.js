const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const canvasWidth = 400;
const canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;


function run(){
  setInterval(function(){
    update();
    draw();
  }, 500);
}

function update(){

}

function draw(){
  context.fillStyle = 'red';
  context.fillRect(0, 0, canvasWidth, canvasHeight);
}

function Pile(index, width, height){
  this.width = width;
  this.height = height;
  this.xcor = index * (canvasWidth / 3) - width / 3;
  this.ycor = 50;

  this.draw = function(){
    context.fillStyle = 'blue';
    context.fillRect(this.xcor, this.ycor, this.width, this.height);
  }
}

function Disc(width, height, color){
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function(xcor, ycor){
    context.fillStyle = color;
    context.fillRect(xcor, ycor, this.width, this.height)
  }
}
