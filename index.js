// funciton for the operations
function operation(num1, operand, num2){
  if (symbol == "+"){
    operationResult = num1 + num2;
  }
  else if (symbol == "-"){
    operationResult = num1 - num2;
  }
  else if (symbol == "*"){
    operationResult = num1 * num2;
  }
  else if (symbol == "/"){
    operationResult = num1 / num2;
  }
  operationResult = parseFloat(operationResult.toFixed(5));
}



// Query selectors for different button types
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equals = document.querySelector(".equals");
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const backspace = document.querySelector(".backspace");
const dot = document.querySelector(".dot");


// Event listeners for clear and equals buttons
clear.addEventListener("click", clearScreen);
equals.addEventListener("click", operate);
backspace.addEventListener('click', handlebackspace);
dot.addEventListener('click', handleDot);

let symbol = null, clickedNumber = '';
let firstNumber = 0, secondNumber = 0, operationResult = 0;

// Function to handle number button clicks
function handleNumberClick(event) {
  const currentDisplay = event.target.textContent;
  clickedNumber += currentDisplay;
  display.innerHTML = clickedNumber;
  let number = parseFloat(clickedNumber);
  if (symbol === null) {
    firstNumber = number;
  }
  else {
    secondNumber = number;
  }
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
  if (firstNumber && secondNumber) {
    operation(firstNumber, symbol, secondNumber);
    firstNumber = operationResult;
    display.innerHTML = firstNumber;
  }
  const operator = event.target.textContent;
  let clickedOperator = operator;
  symbol = operator;
  clickedNumber = '';
}

function handleDot(event) {
  
  const currentDisplay = event.target.textContent;
  display.innerHTML = clickedNumber;
  
  const lastDotIndex = clickedNumber.lastIndexOf('.'); // Find the last occurrence of a dot
  const lastOperatorIndex = Math.max(
      clickedNumber.lastIndexOf('+'),
      clickedNumber.lastIndexOf('-'),
      clickedNumber.lastIndexOf('*'),
      clickedNumber.lastIndexOf('/')
  );
  // Append the dot if no dot exists in the current number
  if (lastDotIndex < lastOperatorIndex || lastDotIndex === -1) {
      clickedNumber += '.';
      secondNumber = "";
  }
}


// clear screeen function
function clearScreen(){
  clickedNumber = "";
  display.innerHTML = clickedNumber;
  symbol = null;
  firstNumber = 0;
  secondNumber = 0,
  operationResult = 0;
}

// backspace function
function handlebackspace(){
  if (!symbol) {
    firstNumber = parseFloat(display.innerHTML.slice(0, -1));
    display.innerHTML = firstNumber;
  }
  else {
    secondNumber = parseFloat(display.innerHTML.slice(0, -1));
    display.innerHTML = secondNumber;
  }
}

numberButtons.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});


// perform the operation when equals sign is clicked
function operate() {
  if (secondNumber === 0) {
    if (!symbol) {
      display.innerHTML = "Start Again!";
    }
    if (symbol === '/') {
      display.innerHTML = "THINK AGAIN!";
    }
    else {
      display.innerHTML = "ERROR!"
    }
  }
  else {
    operation(firstNumber, symbol, secondNumber);
    display.innerHTML = (`${firstNumber} ${symbol} ${secondNumber} = ${operationResult}`);
    secondNumber = 0;
    firstNumber = operationResult;
  }
  symbol = null;
  clickedNumber = "";
}

// Adding event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});


// Adding event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', handleOperatorClick);
});