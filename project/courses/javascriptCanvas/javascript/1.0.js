const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//context 붓, 2d & 3d(webgl, webgl2, bitmaprenderer)

canvas.height = 80;
canvas.width = 80;
//이미지 퀄리티를 위해서 css에서 수정하는 것이 아니라 js에서 수정하도록
//js에도 canvas의 가로 세로 값을 정해준다.

ctx.fillRect(50, 50, 70, 30);
//4개의 argument를 가지고 있음. x, y, width와 height
//canvas의 시작은 ↖ 코너에서부터 0, 0이다.
