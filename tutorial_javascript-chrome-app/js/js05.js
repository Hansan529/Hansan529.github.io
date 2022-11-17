const pageTitle = document.getElementById("idTitle");
// const changeTitle = prompt("변경할 제목을 입력하세요.");

pageTitle.innerText = "innerText Change";

console.log(pageTitle.id);
console.log(pageTitle.className);

// const title = document.getElementsByClassName("something");

// const title2 = document.getElementsByTagName("h1");
// 지금 흐름상은 div 안에 있는 h1을 불러왔음. (모든 h1을 불러온다.)

// const title = document.querySelector(".hello h1");
//class가 hello인 h1이 많아도 제일 첫 번째 결과만 리턴함
//array를 가져올려면 querySelectorAll 을 이용하자.

// const title = document.querySelector("#hello");
// const title = document.getElementById("hello");
// 두 코드는 같은 일을 하고 있다. 모두 id 값을 찾고 있음

// console.log(title);
