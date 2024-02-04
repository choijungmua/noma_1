/* 
<경고창 띄우기>
alert("HI");

<자료형 만들기>
const a = 5,
  b = 2;
const myName = "jungmu";
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

<boolean 종류확인하기>
const amIFat = null;
let something;
console.log(something, amIFat);




//array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
// Get Item from Array
console.log(daysOfWeek[4]);
//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

//object
const player = {
  name: "nico",
  point: 10,
  fat: true,
};
console.log(player.name); // = consoler.log(player["name"]);
console.log(player);
player.point = player.point + 15;
console.log(player.point);

//함수의 기본설명
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is", nameOfPerson, "and I'm ", age);
}
sayHello("JM", 10);
sayHello("YY", 23);
sayHello("UU", 21);


//함수의 기본설명 2
function plus(firstNumber, seconedNumber) { // 지역변수이기에 다른곳에서 사용 불가.
  console.log(firstNumber + seconedNumber);
}
plus(8, 60);

//오브젝트 안의 함수
const player = {
  name: "nico",
  sayHello: function (othersPersionsName) {
    console.log("Hello!" + othersPersionsName);
  },
};

console.log(player.name);
player.sayHello("Nicolas");
*/
