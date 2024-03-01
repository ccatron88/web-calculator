let num1, num2;
let operator = ''
let numDivWidth = 300;
let numDivHeight = 500;
const numKeyWidth = numDivWidth * .13;
const numKeyHeight = numDivHeight * .13;

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
    const actionsEl = `
        <div id="actions-container">
            <div id="clr"><button class="action-key" style="height: ${numKeyHeight}px; width: ${numKeyWidth}px;">C</button></div>
            <div id="equal"><button class="action-key" style="height: ${numKeyHeight}px; width: ${numKeyWidth}px;">=</button></div>
        </div>
    `
    
    for (let i = 9; i >= 0; i--) {
        const numKey = document.createElement('button');
        numKey.classList.add('calculator-key')
        numKey.style.width = `${numKeyWidth}px`;
        numKey.style.height = `${numKeyHeight}px`;
        numKey.innerText = i;
        numeralDiv.appendChild(numKey);
    }
    numeralDiv.insertAdjacentHTML('beforeend', actionsEl).classList.add('calculator-key');



}

document.addEventListener('DOMContentLoaded', loadNumerals())
