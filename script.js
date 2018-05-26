const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const nPiles = 3;
const canvasWidth = 600;
const canvasHeight = 300;
canvas.width = canvasWidth;
canvas.height = canvasHeight + 20;
var isSolved = false;
var nDiscs = 5;
var disHeight = 20;
var discMinWidh = 40;
var piles = [];
var solutions = [];

initialize();
run();

function run(){
  setInterval(function(){
    draw();
  }, 50);
}

function autoSolve(){
  setInterval(function(){
    move();
  }, 500);
}

function initialize(){
  for(var i = 0; i < nPiles; i++){
    piles.push(new Pile(i, 20, 250));
  }
  for(var i = 0; i < nDiscs; i++){
    piles[0].discs.push(new Disc(discMinWidh + (nDiscs - i) * 20, disHeight, 'green'));
  }
}

function draw(){
  context.fillStyle = 'red';
  context.fillRect(0, 0, canvasWidth, canvasHeight + 20);
  for(var i = 0; i < nPiles; i++){
    piles[i].draw();
  }
}

function Pile(index, width, height){
  this.width = width;
  this.height = height;
  this.xcor = index * (canvasWidth / 3) + canvasWidth / 6 - width / 2;
  this.ycor = canvasHeight - height;
  this.discs = [];

  this.draw = function(){
    context.fillStyle = 'blue';
    context.fillRect(this.xcor, this.ycor, this.width, this.height);
    for(var i = 0; i < this.discs.length; i++){
      this.discs[i].draw(this.xcor + this.width / 2, i);
    }
  }
}

function Disc(width, height, color){
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function(pilex, index){
    context.fillStyle = 'white';
    context.fillRect(pilex - this.width / 2, canvasHeight - (index + 1) * disHeight, this.width, this.height);
    context.fillStyle = color;
    context.fillRect(pilex - this.width / 2 + 1, canvasHeight - (index + 1) * disHeight + 1, this.width - 2, this.height - 2);
  }
}

function wait(duration){
  var startTime = Date.now();
  var now = startTime;
  while(now - startTime < duration){
    now = Date.now();
  }
}

function solve(source, temp, desti, index){
  if(index === 1){
    solutions.push({from: source, to: desti});
    return;
  }
  solve(source, desti, temp, index-1);
  solutions.push({from: source, to: desti});
  solve(temp, source, desti, index-1);
}

function move(){
  if(solutions.length){
    let top = solutions.shift();
    piles[top.to].discs.push(piles[top.from].discs.pop());
  }
}

var solveBtn = document.getElementById('solve');
solveBtn.addEventListener('click', function(){
  solve(0, 1, 2, nDiscs);
  autoSolve();
});
