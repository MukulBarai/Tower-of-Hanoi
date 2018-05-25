const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const canvasWidth = 400;
const canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;


context.fillStyle = 'red';
context.fillRect(0, 0, canvasWidth, canvasHeight);
