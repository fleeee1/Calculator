const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, num1, num2) => {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default: 
            return null
    }
};

let firstNumber = 0;
let operator = null;
let secondNumber = null;

let result = operate(operator, firstNumber, secondNumber);

document.querySelectorAll('button').forEach(el =>{
    el.addEventListener('click', () =>{
      digit_pressed(el.textContent);
    });
  });
  function digit_pressed(digit) {
    console.log("digit pressed: " + digit);
  }