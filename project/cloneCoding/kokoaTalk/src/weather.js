const API_KEY = "151d10019e711eb9272dd68ad6d76555";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} ${data.main.temp}°`;
      //data.weather[0].main == 대괄호 안에 있는 중괄호 1번째를 선택함, 그 후에 .main이라는 값을 불러옴!
      // result : Gimpo-si – "Clouds" – "KR"
    });
  //fetch을 이용해 URL을 얻는다. 직접 들어갈 필요 없이 자바스크립트 에서 불러올 수 있음!!!
  //fetch().then == 서버의 응답을 기디라기 위해서 then을 사용함
  //units 온도 출력 단위, standard, metric(섭씨), imperial(화씨)
}
//내 위치 불러오기
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=37.627844242863866&lon=126.68118142114628&appid=151d10019e711eb9272dd68ad6d76555

//My API Key = 151d10019e711eb9272dd68ad6d76555

function onGeoError() {
  alert("당신의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
//getCurrentPosition(1,2) 1:모두가 만족할때 실행할 함수 2: 오류 발생시 실행될 함수

//10줄로 위치를 얻을 수 있음.