const loginform = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginform.classList.add(HIDDEN_CLASSNAME);
  const username = logininput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //console.log(localStorage.getItem("Username"));
  greeting.innerText = "Hello " + USERNAME_KEY;
  paintGreetings(username);
}

function paintGreetings() {
  greeting.innerText = `안녕 ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const checkUsername = localStorage.getItem(USERNAME_KEY);

if (checkUsername === null) {
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener("submit", onLoginSubmit);
  //sumbit하는 event를 감지하여 그 값을 불러옴.
} else {
  paintGreetings(checkUsername);
}
