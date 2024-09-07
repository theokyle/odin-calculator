function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;

};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1/num2;
};

const numberButtons = document.querySelectorAll(".number");
const operatorBUttons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
let displayText = "";

numberButtons.forEach((number) => number.addEventListener("click", () => {
    displayText += number.id;
    display.textContent = displayText;
} ));

function operate(num1, num2, operator) {
    let result;
    switch (operator) {
        case "/":
            result = divide(num1,num2);
            displayText = result.toString;
            display.textContent = displayText;
            break;
        case "*":
            result = multiply(num1,num2);
            displayText = result.toString();
            display.textContent = displayText;
            break;
        case "-":
            result = subtract(num1,num2);
            displayText = result.toString();
            display.textContent = displayText;
            break;
        case "+":
            result = add(num1,num2);
            displayText = result.toString();
            display.textContent = displayText;
            break;
    }
}