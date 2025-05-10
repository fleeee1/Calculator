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
    console.log("Expression is now: " + expression);
}

// Function to update the LOWER display with a number
function updateLowerDisplay(number) {
    let lowerDisplay = document.getElementById('display-below');
    lowerDisplay.textContent = number;
}


// Function to handle when an operator button (+, -, *, /) is pressed
function operatorPressed(op) {
    console.log("operatorPressed called with: " + op);
    let lowerDisplay = document.getElementById('display-below');
    let lowerDisplayText = lowerDisplay.textContent;

    // Extract the numeric value from display text
    let currentNumber = parseFloat(lowerDisplayText);

    if (firstNumber === null) {
        // First number is being entered
        firstNumber = currentNumber;
        operator = op;
        updateUpperDisplay(firstNumber + " " + operator);
        console.log(secondNumber + " 2");

        updateLowerDisplay(null); // Clear lower display after operator is selected

    } else if (operator !== null && secondNumber === null) {
        console.log(secondNumber + " 3");
        // Handling consecutive operators without entering a new number
        if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
            console.log(secondNumber + " 4");
            // Ignore the second consecutive operator
            return;
        }
        operator = op;
        console.log("anything");
        updateUpperDisplay(firstNumber + " " + operator);
    } else if (operator !== null && secondNumber !== null) {
        // Second number is being entered, perform calculation with previous operator
        secondNumber = currentNumber;
        calculateResult();
        firstNumber = result; // Update firstNumber with result for chaining operations

        operator = op; // Update operator for the next operation
        secondNumber = null; // Reset secondNumber
        updateUpperDisplay(firstNumber + " " + operator);
        updateLowerDisplay(null); // Clear lower display after calculation
    }
    console.log(secondNumber + " 1sdfsdf");
    // Clear the lower display for the next number input
    if (op === '=') {
        lowerDisplay.textContent = result; // Show the calculated result

    }
}
console.log(secondNumber + " 1");

// Function to perform the calculation based on current operator
function calculateResult() {
    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            console.log(secondNumber + " 1");
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            console.log(secondNumber + " sdfsd1");
            break;
        default:
            result = null;
            console.log(secondNumber + " change?");
            break;
    }
    console.log(secondNumber + " try again");
    updateUpperDisplay(firstNumber + operator + secondNumber); // Show all but the equals sign above
    console.log(secondNumber + " try agian 2");
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
            updateUpperDisplay(null);
            updateLowerDisplay('0');
        } else if (buttonText === '=') {
            // Equals button pressed
            if (firstNumber !== null && operator !== null) {
                secondNumber = parseFloat(document.getElementById('display').textContent);
                console.log("the second number is " + secondNumber + " after pressing =");
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
        // Do nothing here for now; keep upper display unchanged
    } else {
        console.log(secondNumber + "thing");
        updateUpperDisplay(firstNumber + " " + operator + " " + lowerDisplay.textContent);
        updateLowerDisplay(null); // Clear lower display after operator is pressed
    }
}

