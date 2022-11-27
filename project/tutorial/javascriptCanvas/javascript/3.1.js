const colorOption = Array.from(document.getElementsByClassName("color-option"));
//const colorOption = Array.from(document.querySelectorAll(".color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clear-btn");
const modeBtn = document.getElementById("mode-btn");
const fontsize = document.querySelector("input");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
localStorage.setItem("FillStyle", "#ffffff");

let isPainting = false;
let isFilling = false;
let isEraser = false;

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
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;
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
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    localStorage.setItem("FillStyle", ctx.fillStyle);
  }
}

function onEraserClick() {
  if (isEraser) {
    isEraser = false;
    eraserBtn.innerText = "Eraser";
  } else {
    isEraser = true;
    isFilling = false;
    eraserBtn.innerText = "Active";
    ctx.strokeStyle = localStorage.getItem("FillStyle");
  }
}

colorOption.forEach((color) => color.addEventListener("click", onColorClick));

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

eraserBtn.addEventListener("click", onEraserClick);
modeBtn.addEventListener("click", onModeClick);
color.addEventListener("change", colorChange);
clearBtn.addEventListener("click", clearRect);
lineWidth.addEventListener("change", range);
fontsize.addEventListener("change", inputNumber);
fileInput.addEventListener("change", onFileChange); // #3.0

// canvas
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
