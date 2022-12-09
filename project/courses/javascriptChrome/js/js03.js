function sayHello(nameOfPerson, age) {
  console.log("Hello my name is" + nameOfPerson + "and I'm " + age);
}

sayHello("hs", 10); //sayHello 안 변수에 지정
sayHello("ni", 23);
sayHello("kim", 31); //nameOfPerson 변수를 출력(log) nameOfPerson은 sayHello에 속함(sayHello), sayHello는 hs, ni, kim을 가지고 있음
//그래서 출력 결과는 hi ni kim

function plus(a, b) {
  console.log(a + b);
}

plus(10, 5); // 10-> a,  5-> b
plus(5, 10, 10, 20, 30); // function에 데이터를 받을 변수가 없으면 존재하는 변수의 개수 만큼만 데이터를 불러옴!
plus(1, 10);

const test = {
  inputName: function (userName, text) {
    console.log(userName + "아 안녕 나는 " + text + "라고 해");
  },
};
test.add = "추가"; //add 라는 변수를 추가함
// test.inputName("한산", "웹페이지"); //외부에서 object 속 function에 데이터 넣기

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  min: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(1, 2);
calculator.min(2, 1);
calculator.div(10, 5);
calculator.multi(2, 5);
calculator.power(2, 5);

console.log(calculator.add(2, 3)); // undefined 값이 없음

//
//
//

const age = 01;

function calculatorKrAge(ageOfForeigner) {
  return ageOfForeigner + 2; // return이 function의 결과를 보여줌
}

const krAge = calculatorKrAge(age); // 실행을 하면 age자리에 01이 들어간 후
//ageOfForeigner에 2가 기입되며 return ageOfForeigner + 2 구문이 실행됨
// 고로 age + 2가 됨

console.log(krAge);

const 이름 = "한산";

function imputName(name) {
  return name;
}

const importName = imputName(이름);
//imputName에 name을 리턴해줘서 importName은 name이 된다.

console.log(importName);

const ReturnTest = {
  더하기: function (a, b) {
    return a + b; // return을 하면 function이 끝남
    console.log("bye bye"); // 실행X, 즉 return까지만 function이 실행됨
  },
  빼기: function (a, b) {
    return a - b;
  },
  곱하기: function (a, b) {
    return a * b;
  },
  나누기: function (a, b) {
    return a / b;
  },
  제곱: function (a, b) {
    return a ** b;
  },
};

const 더하기결과 = ReturnTest.더하기(2, 3);
const 빼기결과 = ReturnTest.빼기(더하기결과, 2);
//상호 의존
const 곱하기결과 = ReturnTest.곱하기(5, 빼기결과);
const 나누기결과 = ReturnTest.나누기(곱하기결과, 2);
const 제곱결과 = ReturnTest.제곱(나누기결과, 더하기결과);
//콘솔에서 변수를 불러오면 값이 출력됨
//만약 function에 return이 아닌 console.log를 갖는다면
//콘솔에는 출력이 되겠지만, 콘솔에서 변수를 입력했을 때 undefined를 불러옴
//console.log = 그림의 떡, 꺼내먹으려면 return이 필요

const alpha = {
  name: function (a, b) {
    return a + b;
  },
};

const alphaReslut = alpha.name(100, 50);
