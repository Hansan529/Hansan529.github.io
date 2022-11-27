const clock = document.querySelector(".christmas");

function chDays() {
  const today = new Date();
  const toYear = today.getFullYear();
  const nextYear = new Date(`${toYear + 1}-01-01 00:00:00`);

  const Day = nextYear - today;

  const chDate = String(Math.floor(Day / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const chHour = String(Math.floor((Day / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const chMinute = String(Math.floor((Day / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const chSecond = String(Math.floor((Day / 1000) % 60)).padStart(2, "0");

  clock.innerText = `${chDate}일 ${chHour}시간 ${chMinute}분 ${chSecond}초`;
}

chDays();
setInterval(chDays, 1000);
