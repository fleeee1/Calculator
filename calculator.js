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

document.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click', () =>{
      digit_pressed(button.textContent);

      if (button.textContent === 'AC') {
        display.textContent = '0';
      }





    //   if (operate = num1 + num2) {
    //     display.textContent = result;
    //   }
    //   if (operate = subtract) {
    //     display.textContent = result;
    //   }
    //   if (operate = multiply) {
    //     display.textContent = result;
    //   }
    //   if (operate = divide) {
    //     display.textContent = result;
    //   }

    });
  });

function digit_pressed(digit) {
    let display = document.getElementById('display');

    if (display.textContent === '0') {
        display.textContent = digit;
    } else {
        display.textContent += digit;
    }


    }