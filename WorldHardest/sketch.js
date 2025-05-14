const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400; 
ctx.fillStyle = "red"
ctx.fillRect(200,200,200,200);
console.log(ctx);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5
ctx.beginPath();
ctx.moveTo(190,120,250,3);
ctx.lineTo(190,260,250,3);
ctx.stroke();