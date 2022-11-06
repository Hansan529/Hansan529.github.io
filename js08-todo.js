const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//toDoForm 안에 있는 input을 찾는다.
const toDoList = document.getElementById("todo-list");

let toDos = [];
//기존에는 [] 빈칸이지만, localStorage에 값이 있다면 설정한
//변수를 parsedToDo 변수로 재할당하여 ["a","b","c"]로 시작하게 되는 것이다.

function saveToDO() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // todo를 저장함.
  //JSON.stringify   JSON.parse == 객체를 JSON 문자열로 변환한다. 즉 string 데이터 타입을 object로 변경함.
  //object는 array같이 바뀌며 index를 통해 value를 수정할 수 있음. result : {"toDos1", "toDos2", "toDos3", …}
  //예를 들어 "[a,b,c,d]"(string) => [a,b,c,d] (array);
  //array[0]=a; array[1]=b; array[2]=c; array[3]=d
}

function removeToDo(event) {
  const li = event.target.parentElement; // target(클릭된) HTML의 element이다. string 타입임
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //
  console.log(li.id);
  saveToDO();
  //parentElement로 클릭된 element의 부모임, innerText로 해당 텍스트를 추출할 수 있다.
}

function addToDO(toDoBoxOj) {
  const paragraph = document.createElement("li"); //li를 만들고
  paragraph.id = toDoBoxOj.id;
  const span = document.createElement("span"); //span을 만들고
  span.innerText = toDoBoxOj.text;
  const button = document.createElement("button");
  button.innerText = "✘";
  button.addEventListener("click", removeToDo);
  paragraph.appendChild(span); //li 안에 span 이라는 자식을 추가함
  paragraph.appendChild(button);
  toDoList.appendChild(paragraph);
  //localStorage.add(`todo`)sf
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const toDoBox = toDoInput.value;
  toDoInput.value = "";
  //toDoInput의 값을 제거한다.
  const toDoBoxOj = {
    text: toDoBox,
    id: Date.now(),
  };
  //toDoBox에 id값이 있는 object를 만든다.
  toDos.push(toDoBoxOj);
  //object가 된 toDoBoxOj를 push한다.
  addToDO(toDoBoxOj);
  saveToDO();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   // item
//   console.log("hello", item); // item을 제공함.
// }

const saveToDos = localStorage.getItem("todos");
// string

console.log(saveToDos);
if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  //array 형태가 된 값을 위 변수에 설정함.
  //array 형태라고 가정했을때 .forEach()라는 function을 사용할 수 있음.
  //foreach는 array에 들어있는 모든 값을 iterate 보는 function이다.
  toDos = parsedToDos;
  //toDos의 값을 parsedToDos로 바꾸어 기존에 있던 값들을 사라지지 않도록 한다.
  //

  //parsedToDos.forEach((item) => console.log("hello", item) /*sayHello*/);
  parsedToDos.forEach(addToDO);
  // forEach - function을 싱행하게 해주는데 array 안에 있는 각각의
  // item에 대해서 실행해준다.
  // * forEach 안에 item을 넣어 코드를 줄여서 쓸 수 있다.
  // => 화살표 함수

  //정리 -- local sotrage에 array로 저장이 되지 않아
  //JSON.stringfy로 array처럼 생긴 string으로 저장을 한 후에
  //JSON.parse 이용해 array로 꺼내는 방법이다.
  //Array.foreach는 받아온 array를 for 반복문 없이 item 하나씩 function에 넣을 수 있음.
}

//
//삭제하고자 하는 item을 제외한 나머지를 새로 만들기
//function Filter() {}

//[1, 2, 3, 4].filter(filter);
//새로운 array에도 기존 1,2,3,4를 포함하고자 하면 true를 리턴해야함.

//filter(1) = 1 //(true)
//filter(2) = 2 //(true)
//filter(3) = 3 //(false)
//filter(4) = 4 //(true)
//3을 제외하고 1,2,4만 유지할 것임.

function filter(item) {
  return item !== 3;
}
//filter는 item을 불러오기때문에 item을 저장할 공간을 만들어야한다.

// const arr = [1234, 2345, 3456, 4567, 2000]
// function sexyfunction(del){return del <= 3000}
// arr.filter(sexyfunction)
// result : [1234, 2345, 2000]

// toDos에는 Data.now 값이 담겨있는 ID로 값들이 저장되어있다.
// 여기에는 [일번, 이번, 삼번, 사번, 오번] 값을 넣었다.
// const todos = [{"text":"일번","id":1667627232070},{"text":"이번","id":1667627232642},{"text":"삼번","id":1667627233619},{"text":"사번","id":1667627234374},{"text":"오번","id":1667627235342}]
// 위 값은 로컬 저장공간에서 값들을 불러온 것이다.

// function arrayFilter(todo){return todo.id !== 1667627233619}
// arrayFilter 함수에 값을 todo에 저장하고 todo의 id가 1667627233619와 같지 않다면 true, 같다면 false를 출력함.
// 만약 다르면 array에 남아있고, 같다면 array에서 삭제된다. filter는 true만을 결과에 표출해주기에 삼번
// todo는 변수 이름이지 어떤 단어로 해도 상관없음, id 값 말고도 text와 기타 등등 여러가지 활용 가능하다,
