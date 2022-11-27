// function getFee(isMember) {
//   return isMember ? "$2.00" : "$10.00";
// }

// console.log(getFee(true));

// console.log(getFee(false));

// console.log(getFee(null));

const bodyVal = document.querySelector("body");
const button = document.querySelector("form");

const color = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function changeColor(event) {
  event.preventDefault();
  const firstColor = color[Math.floor(Math.random() * color.length)];
  const lastColor = color[Math.floor(Math.random() * color.length)];
  // * length  Arrey의 길이만큼 곱해준다.
  bodyVal.style = `background: linear-gradient(to left, ${firstColor},${lastColor})`;
}

button.addEventListener("submit", changeColor);
//element.style을 통한 인라인 스타일 (기본)  = document.body.style.backgroundColor = '#fff';
// to left, to right, to top, to bottom, deg(각도) 방향지정

//계산된 스타일 가져오기 (computed)
//window.getComputedStyle(document.body).color;   rgb(51, 51, 51)
// 인라인으로 지정된 스타일이 아니더라도 값을 얻는게 가능하다. 그렇지만,
// -style은 너무 적은 정보를 제공한것에 비해- window.getComputedStyle() 는 간혹 너무 많은 정보를 제공한다.

// inserBefore() 메소드를 사용하면 중간에 태그를 넣을 수 있다.
// 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입한다.
// const script = document.querySelector("script");
// document.body.insertBefore(, script);
// <div id="quote">...</div> 위에 `../img/${chosenImage}`가 삽입된다.
//
