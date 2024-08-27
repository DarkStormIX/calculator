// DOM Manipulation
const number = document.querySelector(".number");
const operatorContainer = document.querySelector(".operator");
const clearContainer = document.querySelector(".clear");

for(let i = 9; i>=0; i--){
    const numberButton = document.createElement("button");
    numberButton.className = "number-button";
    numberButton.textContent = `${i}`;
    number.appendChild(numberButton);
    if(i == 0){
        numberButton.classList.add("zero");
    }
}

const operatorArray = ["+", "-", "x", "/", "="];

for(let i = 0; i<5; i++){
    const operatorButton = document.createElement("button");
    operatorButton.className = "operator-button";
    operatorContainer.appendChild(operatorButton);
    operatorButton.textContent = operatorArray[i];
    if(i == 4){
        operatorButton.classList.add("equals");
    }
}

const clearButton = document.createElement("button");
clearButton.className = "clear-button";
clearContainer.appendChild(clearButton);
clearButton.textContent = "CLEAR";

// arithmetic operation
function add(x, y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

var firstNumber;
var secondNumber;
