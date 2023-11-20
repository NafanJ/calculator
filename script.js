const displayContainer = document.querySelector(".display")

let displayOne = 1
let operator = ''
let displayTwo = 6


// Math functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return add(num1, num2)
            break;
        case '-':
            return subtract(num1, num2)
            break;
        case '*':
            return multiply(num1, num2)
            break;
        case '/':
            return divide(num1, num2)
            break;
    }
}

//operator = prompt("What ya wanna do?")
console.log(operate(displayOne, displayTwo, operator))

keys = [1,2,3,4,5,6,7,8,9]
function addKeys(){
    const keypadContainer = document.getElementsByClassName("keypad")
    for (let i =0; i< keys.length; i++){
        const key = document.createElement("button")
        key.innerText = keys[i];
        key.addEventListener('click', function(e){
            displayContainer.innerText = e.target.innerText
        })
        keypadContainer[0].appendChild(key)
    }
}

addKeys()
