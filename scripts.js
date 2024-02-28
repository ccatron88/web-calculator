let num1, num2;
let operator = ''

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
