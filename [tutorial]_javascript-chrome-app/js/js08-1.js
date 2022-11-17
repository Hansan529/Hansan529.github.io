const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("hello");
// }

// function sayBye() {
//   console.log("bye");
// }

//setInterval(sayHello, 5000);

// setTimeout(sayBye, 5000);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  //const seconds00 = ("00" + date.getSeconds().toString()).slice(-2);
  clock.innerText = `${hours}:${minute}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
