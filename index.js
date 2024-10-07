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

d// populate display when button is clicked
const display = document.querySelector("#display");
const clear = document.querySelector("#clear")

// textContent

clear.addEventListener("click", clearScreen);

function clearScreen(){
    display.innerHTML = "";
}