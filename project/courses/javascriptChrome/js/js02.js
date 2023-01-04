/*
let x = 5;
const y = 10;

let myName = "hansan"

const im = false;
const not = null;
let und;    

console.log(im);
console.log(not);
console.log(und);
*/



/*
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log("hello " + myName);

x = x+y
console.log(x);
console.log(x*y);

var a = 15;
var a = 50;
console.log(a);
a = 40;
console.log(a);
*/



/*
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];


// 정렬에서 골라오기
console.log(daysOfWeek[6]);

// 정렬에 추가하기
daysOfWeek.push(sun);

console.log(daysOfWeek[6]);
*/


const player = {
    name: "hansan",
    age: 22,
    country: "south of Korea",
};
console.log(player);
console.log(player.name);

player.age = player.age - 2;
player.lastName = "San";
console.log(player);

function sayHello(nameOfPerson, age){
    console.log("안녕 나는 " + nameOfPerson + "이고 " + age +"살이야");
}

sayHello("han", 10);
sayHello("san", 21);
sayHello("js", 17);


plus(2, 45);        // 변수의 값을 지정
function plus(a,b){     // 변수를 정의하고
    console.log( a + b);        // 변수를 어떻게 할 지
}

function divide(firstNumber,secondNumber){
    console.log(firstNumber/secondNumber)
}
divide(33,3);
// console.log(firstNumber); function에서 벗어나면 const로 정의된 값이 적용됨, 그래서 function 안에서 사용해야함.


////////////////////

const user = {
    name: "hansan",
    sayHi: function(otherPersonName){
    console.log("안녕 " + otherPersonName + " 만나서반가워");
    }
}

console.log(user.name);
user.sayHi("친구야");