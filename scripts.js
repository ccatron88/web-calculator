let num1, num2;
let operator = ''
let displayValue = 0;
let keyPressCount = 0;
let numDivWidth = 300;
let numDivHeight = 500;
const numKeyWidth = numDivWidth * .13;
const numKeyHeight = numDivHeight * .13;
const displayEl = document.querySelector('#display-result');

displayEl.innerText = displayValue;

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
    console.log('fired');
    if (operator === '+') {
        keyPressCount = 0;
        return add(num1, num2);
    } else if (operator === '-') {
        keyPressCount = 0;
        return subtract(num1, num2);
    } else if (operator === '*') {
        keyPressCount = 0;
        return multiply(num1, num2);
    } else if (operator === '/') {
        keyPressCount = 0;
        return divide(num1, num2);
    }
}

const updateDisplay = (text) => {
    const regNum = /\d/.exec(text);

    if (regNum && keyPressCount == 0) {
        console.log('fired0');
        displayEl.innerText = regNum;
        num1 = text;
    } else if ((regNum && keyPressCount == 1) || (regNum && keyPressCount == 2)) {
        console.log('fired12');
        displayEl.innerText = regNum;
        num2 = text;
    } else {
        console.log('firedOp');
        operator = text;
    }
    keyPressCount++;
}

const loadNumerals = () => {
    const numeralDiv = document.querySelector('#numerals')
    const actionsEl = `
        <div id="actions-container">
            <div id="clr"><button class="action-key" style="height: ${numKeyHeight}px; width: ${numKeyWidth}px;">C</button></div>
            <div id="equal"><button id="equals-btn" class="action-key" style="height: ${numKeyHeight}px; width: ${numKeyWidth}px;">=</button></div>
        </div>
    `
    
    for (let i = 9; i >= 0; i--) {
        const numKey = document.createElement('button');
        numKey.classList.add('calculator-key')
        numKey.style.width = `${numKeyWidth}px`;
        numKey.style.height = `${numKeyHeight}px`;
        numKey.innerText = i;
        numeralDiv.appendChild(numKey);

        numKey.addEventListener('click', (event) => {
            updateDisplay(event.currentTarget.innerText)
        });
    }
    numeralDiv.insertAdjacentHTML('beforeend', actionsEl);
}

// document.addEventListener('DOMContentLoaded', () => {
//     loadNumerals();
//     const equalsEl = document.querySelector('#equal')
    
//     equalsEl.addEventListener('click', () => {
//         operate(num1, num2, operator);
//     })
// });
loadNumerals();
if (document.readyState !== "loading") {
    const equalsEl = document.querySelector("#equals-btn");
    const operatorEl = document.querySelectorAll('.operator');
    const operatorArr = [...operatorEl]

    equalsEl.addEventListener('click', () => {
        displayEl.innerText = operate(num1, num2, operator);
    })

    operatorArr.forEach(item => {
        item.addEventListener('click', () => { updateDisplay(item.innerText) })
    })
}
