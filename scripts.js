let num1, num2;
let operator = ''
let numDivWidth = 300;
let numDivHeight = 500;

function add(fNumber, sNumber) {
    return fNumber + sNumber;
}

function subtract(fNumber, sNumber) {
    return fNumber - sNumber;
}

function multiply(fNumber, sNumber) {
    return fNumber * sNumber;
}

function divide(fNumber, sNumber) {
    return (fNumber / sNumber);
}

const operate = (num1, num2, operator) => {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

const loadNumerals = () => {
    const numeralDiv = document.querySelector('#numerals')
    
    for (let i = 0; i < 10; i++) {
        const numKey = document.createElement('button');
        numKey.classList.add('number-key')
        numKey.style.width = (numDivWidth / 10);
        numKey.style.height = (numDivHeight / 10);
        numKey.innerText = i;
        numeralDiv.appendChild(numKey);
    }
}

document.addEventListener('DOMContentLoaded', loadNumerals())
