const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const canvas2 = document.querySelector(".info canvas");
const ctx2 = canvas2.getContext("2d");

canvas.height = 800;
canvas.width = 800;
canvas2.height = 800;
canvas2.width = 800;

ctx.fillRect(200, 200, 30, 100);
ctx.fillRect(390, 200, 30, 100);
ctx.fillRect(252, 200, 115, 300);
ctx.fillRect(200, 200, 200, 30);

ctx.arc(305, 130, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(285, 120, 10, Math.PI, 2 * Math.PI);
ctx.arc(325, 120, 10, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(305, 145, 20, 0, 1 * Math.PI);
ctx.fill();

// ctx2
ctx2.arc(400, 600, 80, 0, 0.5 * Math.PI);
ctx2.fill();

ctx2.beginPath();
ctx2.arc(200, 400, 80, 0, 1 * Math.PI);
ctx2.fill();

ctx2.beginPath();
ctx2.arc(400, 200, 80, 0, 1.5 * Math.PI);
ctx2.fill();

ctx2.beginPath();
ctx2.arc(600, 400, 80, 0, 2 * Math.PI);
ctx2.fill();
