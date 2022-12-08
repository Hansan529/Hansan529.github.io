const quotes = [
  {
    quote:
      "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.",
    author: "생텍쥐페리",
  },
  {
    quote: "승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다.",
    author: "매튜슨",
  },
  {
    quote:
      "빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다.",
    author: "이디스 워튼",
  },
  {
    quote: "두려움 때문에 갖는 존경심만큼 비열한 것은 없다.",
    author: "카뮈",
  },
  {
    quote: "당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다.",
    author: "러셀",
  },
  {
    quote: "스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.",
    author: "에릭 프롬",
  },
  {
    quote:
      "큰 재주를 가졌다면 근면은 그 재주를 더 낫게 해줄 것이며 보통의 능력밖에 없다면 근면은 부족함을 보충해 줄 것이다.",
    author: "J.레이놀즈",
  },
  {
    quote:
      "부지런함에도 의와 이의 구분이 있다. 닭이 울 때부터 부지런하기로는 순임금이나 도적이나 한가지이기 때문이다.",
    author: "가정집",
  },
  {
    quote:
      "과거를 지배하는 자가 마래를 지배하며 현재를 지배하는 자가 과거를 지배한다. ",
    author: "조지 오웰",
  },
  {
    quote: "노동은 세개의 큰 악, 즉, 지루함, 부도덕, 그리고 가난을 제거한다.",
    author: "괴테",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;

// Math.round() 반올림
// ceil 숫자를 천장까지 높여줌. 1.1 == 2,  1.0 == 1
// floor 숫자를 바닥까지 낮춰줌 1.9 == 1   1.99999 === 1
