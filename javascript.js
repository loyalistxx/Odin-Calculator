const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (operator, num1, num2) => {
  operator(num1, num2);
};

const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

let calcResult = document.querySelector("#calculatorResult");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const dot = document.querySelector("#dot");
const zero = document.querySelector("#zero");

const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

plusButton.addEventListener("click", () => {
    if (calcResult.textContent == null) {
        return;
    } else if ()
});
minusButton.addEventListener("click", () => {
  calcResult.textContent += " - ";
});
multiplyButton.addEventListener("click", () => {
  calcResult.textContent += " * ";
});
divideButton.addEventListener("click", () => {
  calcResult.textContent += " ÷ ";
});

one.addEventListener("click", () => {
  calcResult.textContent += "1";
});
two.addEventListener("click", () => {
  calcResult.textContent += "2";
});
three.addEventListener("click", () => {
  calcResult.textContent += "3";
});
four.addEventListener("click", () => {
  calcResult.textContent += "4";
});
five.addEventListener("click", () => {
  calcResult.textContent += "5";
});
six.addEventListener("click", () => {
  calcResult.textContent += "6";
});
seven.addEventListener("click", () => {
  calcResult.textContent += "7";
});
eight.addEventListener("click", () => {
  calcResult.textContent += "8";
});
nine.addEventListener("click", () => {
  calcResult.textContent += "9";
});
dot.addEventListener("click", () => {
  calcResult.textContent += ".";
});
zero.addEventListener("click", () => {
  calcResult.textContent += "0";
});

clear.addEventListener("click", () => {
  calcResult.textContent = null;
});
backspace.addEventListener("click", () => {
  calcResult.textContent = calcResult.textContent.substring(
    0,
    calcResult.textContent.length - 1
  );
});
