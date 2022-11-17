const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 800;
canvas.width = 800;

const colors = [
  "#c56cf0",
  "#ffb8b8",
  "#ff3838",
  "#ff9f1a",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
  "#4b4b4b",
];

ctx.lineWidth = 2;
//ctx.moveTo(0,0);
function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(Math.random() * 800, Math.random() * 800);
  ctx.lineTo(event.offsetX, event.offsetY);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.stroke();
}

//canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onClick);
