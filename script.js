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

    clickNumber(numberButton);
}

const operatorArray = ["+", "-", "x", "/", "="];

for(let i = 0; i<5; i++){
    const operatorButton = document.createElement("button");
    operatorButton.className = "operator-button";
    operatorContainer.appendChild(operatorButton);
    operatorButton.textContent = operatorArray[i];
    if(i == 4){
        operatorButton.classList.add("equals");
        clickEquals(operatorButton);
    }
    else{
        clickOperator(operatorButton);
    }
}

const statement = document.querySelector(".statement");
const answer = document.querySelector(".answer");

const clearButton = document.createElement("button");
clearButton.className = "clear-button";
clearContainer.appendChild(clearButton);
clearButton.textContent = "CLEAR";
clearButton.addEventListener("click", (e) => {
    statement.textContent = "";
    answer.textContent = "";
});


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

var fullStatement;
var firstNumber;
var secondNumber;
var operator;

function operate(firstNumber, secondNumber, operator){
    if(operator == "+")
        return add(firstNumber,secondNumber);
    else if(operator == "-")
        return subtract(firstNumber, secondNumber);
    else if(operator == "x")
        return multiply(firstNumber,secondNumber);
    else if(operator == "/")
        return divide(firstNumber,secondNumber);
}

function clickNumber(element){
    element.addEventListener("click", (e) => {
        statement.textContent += element.textContent;
    });
}

function clickOperator(element){

    element.addEventListener("click", (e) => {
        statement.textContent += element.textContent;
    });
}

function clickEquals(element){
    element.addEventListener("click", (e) => {
        fullStatement = statement.textContent;
        const array = fullStatement.split("");
        countOperator(array);
        splitNumber(array);
        console.log(operator);
        var answerText = operate(firstNumber,secondNumber,operator);
        answer.textContent = answerText;
    });
}

function countOperator(array){
    var operatorCounter = 0;
    array.forEach(element => {
        for(let i = 0; i<3; i++){
            if(element == operatorArray[i])
                operatorCounter++;
        }
    });

    return operatorCounter;
}

function splitNumber(array){
    var operatorIndex = array.findIndex(element => {
        return element == "+" ||
        element == "-" ||
        element == "x" ||
        element == "/";
    });
    firstNumber = Number(array.splice(0, operatorIndex).join(""));
    operator = array.shift();
    secondNumber = Number(array.join(""));
}