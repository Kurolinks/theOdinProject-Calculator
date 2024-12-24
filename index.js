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
}



// Query selectors for different button types
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equals = document.querySelector(".equals");
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');


clear.addEventListener("click", clearScreen);
equals.addEventListener("click", operate);

let symbol;
let clickedNumber = '';
let firstNumber = 0, secondNumber = 0, operationResult = 0;

// Function to handle number button clicks
function handleNumberClick(event) {
  // firstNumber = operationResult;
  const currentDisplay = event.target.textContent;
  clickedNumber += currentDisplay;

  display.innerHTML = clickedNumber;
  let number = parseFloat(clickedNumber);
  // alert(firstNumber)
  if (firstNumber === 0) {
    firstNumber = number;
    // alert(firstNumber)
  }
  else {
    secondNumber = number;
    // clickedNumber += currentDisplay;
  }
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
  const currentDisplay = event.target.textContent;
  const operator = event.target.textContent;
  let clickedOperator = currentDisplay;
  display.innerHTML = clickedOperator;
  symbol = operator;
  clickedNumber = '';
}

function clearScreen(event){
  // display.innerHTML = "";
  clickedNumber = 0;
  display.innerHTML = clickedNumber;
}

numberButtons.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});


// perform the operation when equals sign is clicked
function operate(event) {
  // let number = event.target.textContent;
  // display.innerHTML = number;
  // alert(firstNumber);
  // alert(symbol);
  // alert(secondNumber);
  operation(firstNumber, symbol, secondNumber);
  display.innerHTML = (`${firstNumber} ${symbol} ${secondNumber} = ${operationResult}`);
}

equals.addEventListener('click', operate);

// Adding event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});

// Adding event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', handleOperatorClick);
});