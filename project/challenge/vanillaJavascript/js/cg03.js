const form = document.querySelector("form");
const forminput_bt = document.querySelector("form input.between");
const forminput_gu = document.querySelector("form input.guess");
const text = document.querySelector("#choseText");
const result = document.querySelector("#result");

function C(event) {
  event.preventDefault();
  result.classList.remove("result");
  const betweenVal = forminput_bt.value;
  const guessVal = forminput_gu.value;
  const randNum = Math.floor(Math.random() * betweenVal + 1);
  text.innerText = `You chose: ${guessVal}, the machine chose: ${randNum} `;
  text.classList.remove("hidden");
  result.classList.remove("hidden");

  if (Math.floor(guessVal) === randNum) {
    result.innerText = "You Won!";
    result.classList.add("result");
  } else {
    result.innerText = "You lost!";
  }
}

form.addEventListener("submit", C);
// document.write(Math.floor(Math.random() * (A - 0) + 0));
