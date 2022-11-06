const loginForm = document.querySelector("#login-form");
const inputUser = loginForm.querySelector("input");
const logoutBtn = document.querySelector("#logout");
const todoForm = document.querySelector("#todo-form");

function login(event) {
  event.preventDefault();
  const name = inputUser.value;
  inputUser.value = "";
  localStorage.setItem("username", name);
  todoForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  loginUser(name);
}

loginForm.addEventListener("submit", login);

function logoutFn(event) {
  event.preventDefault();
  localStorage.removeItem("username");
  greeting.classList.add("hidden");
  loginForm.classList.remove("hidden");
  logoutBtn.classList.add("hidden");
  todoForm.classList.add("hidden");
}

logoutBtn.addEventListener("click", logoutFn);

function loginUser(userLoginCheck) {
  greeting.innerText = `안녕하세요 ${userLoginCheck}님`;
  logout.innerText = "로그아웃";
  greeting.classList.remove("hidden");
  logout.classList.remove("hidden");
}

const userLoginCheck = localStorage.getItem("username");

if (userLoginCheck === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", login);
} else {
  loginForm.classList.add("hidden");
  todoForm.classList.remove("hidden");
  loginUser(userLoginCheck);
}

// - 배경 랜덤 추가 -
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// Tag 만들기11

bgImage = `/img/${chosenImage}`;
// 가상의 Tag

//document.body.appendChild(bgImage);
//body의 마지막에 () html을 추가한다.

// insertBefore() 메소드를 사용하면 중간에 태그를 넣을 수 있다.
// 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입한다.
const h1 = document.querySelector("#quote");
document.body.insertBefore(bgImage, h1);

// <div id="quote">...</div> 위에 `../img/${chosenImage}`가 삽입된다.
//
