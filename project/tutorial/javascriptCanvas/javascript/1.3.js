const canvas = document.querySelector("#own canvas");
const ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 200;
ctx.moveTo(50, 50);
ctx.lineTo(50, 150);
ctx.stroke();

const canvas2 = document.querySelector("#two canvas");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 200;
canvas2.height = 200;
ctx2.rect(50, 50, 100, 100);
ctx2.stroke();
