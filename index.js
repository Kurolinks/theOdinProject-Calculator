// calculation functions
function addOperation(num1, num2){
    let result = (num1 + num2);
    console.log(result);
}

function substractOperation(num1, num2){
    let result = num1 - num2;
    console.log(result);
}

function multiplyOperation(num1, num2){
    let result = num1 * num2;
    console.log(result);
}

function divideOperation(num1, num2){
    let result = num1 / num2;
    console.log(result);
}

let firstNumber, secondNumber, operator;

function operate(firstNumber, operator, secondNumber){
    addOperation(firstNumber, secondNumber);
}

// populate display when button is clicked
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

  

// textContent

clear.addEventListener("click", clearScreen);

function clearScreen(){
    display.innerHTML = "";
}


// Query selectors for different button types
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

// Function to handle number button clicks
function handleNumberClick(event) {
  const number = event.target.textContent;
  display.innerHTML = number;
  alert(display.innerHTML);
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
  const operator = event.target.textContent;
  display.innerHTML = operator;
}

// Adding event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', handleNumberClick);
});

// Adding event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', handleOperatorClick);
});
