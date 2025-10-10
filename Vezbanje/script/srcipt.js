const bgLight = document.getElementById("light");
function bgColorLight() {
  document.body.style.backgroundColor = "white";
}
const bgDark = document.getElementById("dark");
function bgColorDark() {
  document.body.style.backgroundColor = "black";
}

const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const subtraction = document.getElementById("sub");
const minus = document.getElementById("muinus");
const times = document.getElementById("times");
const devided = document.getElementById("devided");
function sub(num1, num2) {
  return num1 + num2;
}
console.log(sub(2, 5));

function isEven(numberToCheck) {
  if (numberToCheck % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(12));

function firstCharOfString(str) {
  return str[0];
}
console.log(firstCharOfString("kazar"));

function obrniNiz(str) {
  for (let i = str.length; i <= 0; i--) {
    return str[i];
  }
}
console.log(obrniNiz(1, 3, 5, 3, 76, 8));
