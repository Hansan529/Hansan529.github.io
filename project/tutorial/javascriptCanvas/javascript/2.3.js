const colorOption = Array.from(document.getElementsByClassName("color-option"));
//const colorOption = Array.from(document.querySelectorAll(".color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clear-btn");
const modeBtn = document.getElementById("mode-btn");
const fontsize = document.querySelector("input");
canvas.height = 800;
canvas.width = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

function colorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

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

function onColorClick(event) {
  // 문제
  const colorValue = event.target.dataset.color;

  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick(event) {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

colorOption.forEach((color) => color.addEventListener("click", onColorClick));

//
modeBtn.addEventListener("click", onModeClick);
color.addEventListener("change", colorChange);
clearBtn.addEventListener("click", clearRect);
lineWidth.addEventListener("change", range);
fontsize.addEventListener("change", inputNumber);
//

canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
