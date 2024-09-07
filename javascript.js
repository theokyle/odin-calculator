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
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
let displayText = "";

numberButtons.forEach((number) => number.addEventListener("click", () => {
    displayText += number.id;
    display.textContent = displayText;
} ));

operatorButtons.forEach((operator) => operator.addEventListener("click", () => {
    displayText += " " + operator.id + " ";
    display.textContent = displayText;
} ));

equals.addEventListener("click", () => {
    let equation = displayText.split(" ");
    operate(Number(equation[0]),Number(equation[2]), equation[1]);
});

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