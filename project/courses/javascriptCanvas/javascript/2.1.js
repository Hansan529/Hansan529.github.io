const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const form = document.querySelector("form");
const num = document.querySelector("form input");
const btn = form.querySelector("button");
canvas.height = 800;
canvas.width = 800;
ctx.lineWidth = 2;

let isPainting = false;

function numSubmit(event) {
  event.preventDefault();
  const numVal = num.value;
  ctx.lineWidth = numVal;
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
num.addEventListener("submit", numSubmit);
//

canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
