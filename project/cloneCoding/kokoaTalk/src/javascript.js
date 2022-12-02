// const loginInfo = document.getElementById("login__keep_info");
const clock = document.querySelector("#status-bar__time");


const getClock = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes}`;
};

getClock();
setInterval(getClock, 1000);

// loginInfo.addEventListener("click", );