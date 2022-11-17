const clock = document.querySelector(".clock .Now");

function chDays() {
  const today = new Date();

  const chMonth = String(today.getMonth() + 1).padStart(2, "0");
  const chDate = String(today.getDate()).padStart(2, "0");
  const chHour = String(today.getHours()).padStart(2, "0");
  const chMinute = String(today.getMinutes()).padStart(2, "0");
  const chSecond = String(today.getSeconds()).padStart(2, "0");

  clock.innerText = `${chMonth}월 ${chDate}일 ${chHour}시간 ${chMinute}분 ${chSecond}초`;
}

chDays();
setInterval(chDays, 1000);
