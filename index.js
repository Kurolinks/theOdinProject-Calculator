// funciton for the operations
function operation(num1, operand, num2){
  if (symbol == "+"){
    result = num1 + num2;
  }
  else if (symbol == "-"){
    result = num1 - num2;
  }
  else if (symbol == "*"){
    result = num1 * num2;
  }
  else if (symbol == "/"){
    result = num1 / num2;
  }
}

const items = [];
let symbol;

// populate display when button is clicked
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equals = document.querySelector(".equals");

clear.addEventListener("click", clearScreen);
equals.addEventListener("click", operate);

function clearScreen(){
    display.innerHTML = "";
}


// Query selectors for different button types
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

// Function to handle number button clicks
function handleNumberClick(event) {
  let number = event.target.textContent;
  display.innerHTML = number;
  number = parseFloat(number);
  items.push(number);
  // alert(typeof(number))
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
  const operator = event.target.textContent;
  display.innerHTML = operator;
  symbol = operator;
}

// perform the operation when equals sign is clicked
function operate(event) {
  let number = event.target.textContent;
  display.innerHTML = number;
  let first = items[0];
  let second = items[1];
  operation(first, symbol, second);
  display.innerHTML = (`${first} ${symbol} ${second} = ${result}`);
  items.splice(0, items.length);
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