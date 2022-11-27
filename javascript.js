class Calculator {
  constructor(prevOperandTextElement, currentOperandTextElement) {
    this.prevOperandTextElement = prevOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.prevOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  backspace() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  keyboardInput(e) {
    if ((e.key >= 0 && e.key <= 9) || e.key == ".") this.appendNumber(e.key);
    if (e.key === "=" || e.key === "Enter") this.operate(e.key);
    if (e.key === "Backspace") this.backspace();
    if (e.key === "Escape") this.clear();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
      this.appendOperation(this.converter(e.key));
  }
  converter(key) {
    if (key === "/") return "÷";
    if (key === "*") return "×";
    if (key === "-") return "-";
    if (key === "+") return "+";
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  appendOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.prevOperand !== "") {
      this.operate();
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = "";
  }

  operate() {
    let computation;
    const prev = parseFloat(this.prevOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = add(prev, current);
        break;
      case "-":
        computation = subtract(prev, current);
        break;
      case "×":
        computation = multiply(prev, current);
        break;
      case "÷":
        computation = divide(prev, current);
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.prevOperand = "";
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 1,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.prevOperandTextElement.innerText = `${this.getDisplayNumber(
        this.prevOperand
      )} ${this.operation}`;
    } else {
      this.prevOperandTextElement.innerText = "";
    }
  }
}

const prevOperandTextElement = document.querySelector("[data-prevOperand]");
const currentOperandTextElement = document.querySelector(
  "[data-currentOperand]"
);

const operationButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-number]");
const equalButton = document.querySelector("[data-equal]");
const allClearButton = document.querySelector("[data-all-clear]");
const backspaceButton = document.querySelector("[data-backspace]");

const calculator = new Calculator(
  prevOperandTextElement,
  currentOperandTextElement
);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

window.addEventListener("keydown", (e) => {
  calculator.keyboardInput(e);
  calculator.updateDisplay();
});
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendOperation(button.innerText);
    calculator.updateDisplay();
  });
});
equalButton.addEventListener("click", (button) => {
  calculator.operate();
  calculator.updateDisplay();
});
allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
backspaceButton.addEventListener("click", (button) => {
  if (currentOperand == null) return;
  calculator.backspace();
  calculator.updateDisplay();
});
