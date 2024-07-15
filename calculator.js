const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Initialize variables to hold calculator state
let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;


// Function to update the UPPER display with the arithmetic expression
function updateUpperDisplay(expression) {
    let upperDisplay = document.getElementById('display-above');
    upperDisplay.textContent = expression;
}







// Function to handle when an operator button (+, -, *, /) is pressed
function operatorPressed(op) {
    let lowerDisplay = document.getElementById('display-below');
    let lowerDisplayText = lowerDisplay.textContent;

    // Extract the numeric value from display text
    let currentNumber = parseFloat(lowerDisplayText);

    if (firstNumber === null) {
        // First number is being entered
        firstNumber = currentNumber;
        operator = op;
        updateUpperDisplay(firstNumber + " " + operator);
    } else if (operator !== null && secondNumber === null) {
        // Handling consecutive operators without entering a new number
        operator = op;
        updateUpperDisplay(firstNumber + " " + operator);
    } else if (operator !== null && secondNumber !== null) {
        // Second number is being entered, perform calculation with previous operator
        secondNumber = currentNumber;
        calculateResult();
        firstNumber = result; // Update firstNumber with result for chaining operations
        operator = op; // Update operator for the next operation
        secondNumber = null; // Reset secondNumber
        updateUpperDisplay(firstNumber + " " + operator);
    }

    // Update display to show the operator (if not equals) or clear for next number input
    if (op !== '=') {
        upperDisplay.textContent = '0'; // Visual representation of the operator
    } else {
        lowerDisplay.textContent = result; // Show the calculated result
    }
}


// Function to perform the calculation based on current operator
function calculateResult() {
    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
        default:
            result = null;
            break;
    }
    updateUpperDisplay(''); // Clear the upper display after calculation
    updateLowerDisplay(result);
}

// Event listener to handle button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (!isNaN(parseInt(buttonText))) {
            // Digit button pressed
            digitPressed(buttonText);
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            // Operator button pressed
            operatorPressed(buttonText);
        } else if (buttonText === 'AC') {
            // Clear button pressed
            firstNumber = null;
            operator = null;
            secondNumber = null;
            result = null;
            updateUpperDisplay('0');
            updateLowerDisplay('0');
        } else if (buttonText === '=') {
            // Equals button pressed
            if (firstNumber !== null && operator !== null) {
                secondNumber = parseFloat(document.getElementById('display').textContent);
                calculateResult();
                firstNumber = result; // Update firstNumber with result for potential chaining
                operator = null; // Reset operator after calculation
                secondNumber = null; // Reset secondNumber after calculation
            }
        }
    });
});

// Function to handle when a digit button is pressed
function digitPressed(digit) {
    let lowerDisplay = document.getElementById('display-below');

    if (lowerDisplay.textContent === '0') {
        lowerDisplay.textContent = digit;
    } else {
        lowerDisplay.textContent += digit;
    }

    // Update the upper display with the current arithmetic expression
    if (operator === null) {
        updateUpperDisplay(display.textContent);
    } else {
        updateUpperDisplay(firstNumber + " " + operator + " " + display.textContent);
    }
}

