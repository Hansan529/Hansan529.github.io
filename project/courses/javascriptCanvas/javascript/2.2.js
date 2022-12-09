const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const btn = document.querySelector("button");
const fontsize = document.querySelector("input");
canvas.height = 800;
canvas.width = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function range(event) {
  fontsize.value = event.target.value;
  ctx.lineWidth = event.target.value;
}

function inputNumber(event) {
  lineWidth.value = fontsize.value;
  ctx.lineWidth = event.target.value;
}

function mouseMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}
function stopPainting() {
  isPainting = false;
  ctx.beginPath();
}

function clearRect(event) {
  event.preventDefault();
  canvas.height = 800;
  canvas.width = 800;
}

//
btn.addEventListener("click", clearRect);
lineWidth.addEventListener("change", range);
fontsize.addEventListener("change", inputNumber);
//

canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
