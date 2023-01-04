//color
const colorOption = Array.from(document.getElementsByClassName("color-option"));
//const colorOption = Array.from(document.querySelectorAll(".color-option"));
const color = document.getElementById("color");
const fontColor = document.getElementById("fontColorSelect");

//style
const widthSelect = document.getElementById("width-select");
const fontHeight = document.getElementById("fontRegBold");
const fontFamily = document.getElementById("fontStyle");
//

//main canvas
const lineWidth = document.getElementById("line-width");
const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "butt";
localStorage.setItem("FillStyle", "#ffffff");
localStorage.setItem("StrokeStyle", "#000000");

//btn
const clearBtn = document.getElementById("clear-btn");
const drawBtn = document.getElementById("draw-btn");
const paintBtn = document.getElementById("paint-btn");
const eraserBtn = document.getElementById("eraser-btn");
const saveBtn = document.getElementById("save");
const textBtn = document.getElementById("RightArrow");
const fillBtn = document.getElementById("fill-btn");
const rectangleBtn = document.getElementById("rectangle");
const circleBtn = document.getElementById("circle");

const fontsize = document.getElementById("size");
const fileInput = document.getElementById("file");
const outlineChk = document.getElementById("outline");

//text
const textInput = document.getElementById("text");
const textSizeInput = document.getElementById("text-size");

//preview canvas
const canvasWidth = document.getElementById("width");
const ctxWidth = canvasWidth.getContext("2d");
const PREVIEW_WIDTH = 180;
const PREVIEW_HEIGHT = 60;
canvasWidth.width = PREVIEW_WIDTH;
canvasWidth.height = PREVIEW_HEIGHT;
ctxWidth.fillStyle = "white";
ctxWidth.lineWidth = lineWidth.value;
previewWidth();

// mode = 0: none, 1: sketch, 2: fill, 3:eraser, 4:text, 5:sketchFill  6:Rectangle, 7: Circle
let mode = 0;
let isPainting = false;
let outline = false;

let rectX = 0;
let rectY = 0;

//shortcut color change Style update
function colorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
}

//input range size update
function range(e) {
  fontsize.value = e.target.value;
  ctx.lineWidth = e.target.value;
  ctxWidth.lineWidth = e.target.value;
  previewWidth();
}

//input font-size width update
function inputNumber(e) {
  lineWidth.value = fontsize.value;
  ctx.lineWidth = e.target.value;
}

function mouseMove(e) {
  if (isPainting) {
    if (mode === 1 || mode === 3 || mode === 5) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      return;
    } else if (mode === 6) {
      const x = rectX;
      const y = rectY;
      const width = e.offsetX - x;
      const height = e.offsetY - y;
      ctx.fillRect(x, y, width, height);
      console.log(x, y, width, height);
    } else if (mode === 7) {
      const cirX = e.offsetX;
      const cirWidth = cirX - rectX;
      ctx.arc(rectX, rectY, cirWidth, 0, Math.PI * 2, true);
      ctx.fill();
    }
    ctx.moveTo(e.offsetX, e.offsetY);
  }
}

//draw
function startPainting(e) {
  isPainting = true;
  if (mode === 6 || mode === 7) {
    rectX = e.offsetX;
    rectY = e.offsetY;
  }
}

function stopPainting(e) {
  isPainting = false;
  if (mode === 5) {
    ctx.fill();
  }
  ctx.beginPath();
}

function onDrawClick() {
  mode = 1;
  ctx.strokeStyle = localStorage.getItem("StrokeStyle");
  eraserBtn.innerText = "⌫";
}

function onFillClick() {
  mode = 5;
}

//draw color
function onColorClick(e) {
  const colorValue = e.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
  fontColor.value = colorValue;
  localStorage.setItem("StrokeStyle", e.target.dataset.color);
}

//tool
function onCanvasClick(e) {
  if (mode === 2) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    localStorage.setItem("FillStyle", ctx.fillStyle);
  } else if (mode === 4) {
    const text = textInput.value;
    const ftStyle = fontHeight.value;
    const ftSize = textSizeInput.value;
    const ftFamily = fontFamily.value;
    if (text !== "") {
      ctx.save();
      ctx.lineWidth = 1;
      ctx.font = `${ftStyle} ${ftSize}px ${ftFamily}`;
      if (outline) {
        ctx.strokeText(text, e.offsetX, e.offsetY);
      } else {
        ctx.fillText(text, e.offsetX, e.offsetY);
        console.log("dd");
      }
      ctx.restore();
    }
  }
}
function clearRect(e) {
  e.preventDefault();
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;
  localStorage.setItem("FillStyle", "#ffffff");
  localStorage.setItem("StrokeStyle", "#000000");
  mode = 1;
  eraserBtn.innerText = "⌫";
}

function onPaintClick(event) {
  mode = 2;
}

function onEraserClick() {
  if (mode === 3) {
    mode = 1;
    eraserBtn.innerText = "⌫";
    ctx.strokeStyle = localStorage.getItem("StrokeStyle");
  } else {
    mode = 3;
    eraserBtn.innerText = "⌫ 활성화";
    ctx.strokeStyle = localStorage.getItem("FillStyle");
  }
}

colorOption.forEach((color) => color.addEventListener("click", onColorClick));

function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

function onTextClick() {
  mode = 4;
}

function onRectangleClick() {
  mode = 6;
}

function onCircleClick() {
  mode = 7;
}

//preview
function onChangeWidthStyle() {
  ctx.lineCap = widthSelect.value;
  ctxWidth.lineCap = widthSelect.value;
  previewWidth();
}

function previewWidth() {
  ctxWidth.fillRect(0, 0, PREVIEW_WIDTH, PREVIEW_HEIGHT);
  ctxWidth.moveTo(30, 30);
  ctxWidth.lineTo(150, 30);
  ctxWidth.stroke();
}

//font style
function onFontColorChange(e) {
  const colorValue = e.target.value;
  ctx.fillStyle = colorValue;
}

function onOutlineCheckBox() {
  if (outline) {
    outline = false;
    outlineStyleOff();
  } else {
    outline = true;
    outlineStyleOn();
  }
}

function outlineStyleOn() {
  outlineChk.style.border = "none";
  outlineChk.style.color = "white";
  outlineChk.style.backgroundColor = "black";
}

function outlineStyleOff() {
  outlineChk.style.border = "black";
  outlineChk.style.color = "black";
  outlineChk.style.backgroundColor = "white";
}

// canvas
// canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

//
eraserBtn.addEventListener("click", onEraserClick);
drawBtn.addEventListener("click", onDrawClick);
paintBtn.addEventListener("click", onPaintClick);
color.addEventListener("change", colorChange);
clearBtn.addEventListener("click", clearRect);
lineWidth.addEventListener("change", range);
fontsize.addEventListener("change", inputNumber);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
widthSelect.addEventListener("change", onChangeWidthStyle);
fontColor.addEventListener("change", onFontColorChange);
textBtn.addEventListener("click", onTextClick);
outlineChk.addEventListener("click", onOutlineCheckBox);
fillBtn.addEventListener("click", onFillClick);
rectangleBtn.addEventListener("click", onRectangleClick);
circleBtn.addEventListener("click", onCircleClick);
