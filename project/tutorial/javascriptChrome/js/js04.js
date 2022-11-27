const age = parseInt(prompt("당신의 나이는 몇 살이신가요?"));

console.log(parseInt(age));
console.log(isNaN(age));

/*
if (isNaN(age)) {
  console.log("숫자를 입력해주세요.");
} else {
  console.log("당신의 나이는 " + age + " 살입니다.");
}

*/

/*

if (isNaN(age)) {
  console.log("숫자를 입력하세요."); // false (숫자가 아님) 이면 나타날 함수
} else if (age < 18) {
  console.log("미성년자는 불가능합니다."); // 숫자이며 age가 18보다 낮을 경우
} else if (age > 50) {
  console.log("음주를 줄이시는게 좋습니다."); // 숫자이며 age가 50보다 클 경우
} else {
  console.log("성인입니다. 음주가 가능합니다."); // 18~50 사이 값(위 if값들에 모두 해당하지 않는 것) 해당 값
}

*/

if (isNaN(age) || age < 0) {
  // 음수를 작성 할 경우 true(NaN)
  console.log("양수를 입력하세요."); // false (숫자가 아님) 이면 나타날 함수
} else if (age <= 18) {
  console.log("미성년자입니다.");
} else if (age >= 18 && age <= 50) {
  // &&는 and 연산자이다. 좌측과 우측 모두 true여야만 한다. 한 쪽이라도 false면 결과는 false
  console.log("음주 가능합니다.");
} else if (age === 51 || age === 52) {
  console.log("음주 그만하셔야합니다.");
  // ||는 or 연산자이다. 둘 중 하나라도 true라면 true를 출력한다.
} else {
  // else는 선택사항입니다.
  console.log("음주 그만합니다.");
}

if ((a && b) || (c && d)) {
  // c와 d의 조건이 모두 true라면 true
}
