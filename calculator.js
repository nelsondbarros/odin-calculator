let displayResult = "";
let value1, value2, valueTemp;
let operator;
let operatorPressed;
var values = []
let equalResult;
const buttons = document.querySelectorAll('.key');
const display = document.getElementById('display');

function add(number1,number2) {
    return (number1+number2);
}

function subtract(number1,number2) {
    return (number1-number2);
}

function multiply(number1,number2) {
    return (number1*number2);
}

function divide(number1,number2) {
    if(number1 == 0 && number2 == 0) {
        return "Cannot divide 0 by 0";
    }
    return (number1/number2);
}

function operate(operator,number1,number2) {
    let result;
    switch(operator) {
        case add:
            result = add(number1,number2);
            break;
        case subtract:
            result = subtract(number1,number2);
            break; 
        case multiply:
            result = multiply(number1,number2);
            break;
        case divide:
            result = divide(number1,number2);
            break;
        default:
            "Not supported";
    }
    return result;
}


function simpleCalculate(){
    let result = operate(operator, values.at(-2), values.at(-1));
    values[0] = result
    values.pop()
    equalResult = result;
    display.textContent = (Math.round(result * 100) / 100);
}

// buttons.forEach((button) => {button.addEventListener('click', () => {   

// })})
document.getElementById('add').addEventListener("click", () => {

    if (values[0] == 0 || values[0] == null){
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        operator = add;
    }
    else {
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        if (operatorPressed !== "add") {
            simpleCalculate()
        }
        else {
            operator = add;
            simpleCalculate()
        }
        operatorPressed = "add"
    }

})

document.getElementById('subtract').addEventListener("click", () => {

    if (values[0] == 0 || values[0] == null){
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        operator = subtract;
    }
    else {
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        if (operatorPressed !== "subtract") {
            simpleCalculate()
        }
        else {
            operator = subtract;
            simpleCalculate()
        }
        operatorPressed = "subtract"
    }
    
})

document.getElementById('multiply').addEventListener("click", () => {

    if (values[0] == 0 || values[0] == null){
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        operator = multiply;
    }
    else {
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        if (operatorPressed !== "multiply") {
            simpleCalculate()
        }
        else {
            operator = multiply;
            simpleCalculate()
        }
        operatorPressed = "multiply"
    }
})

document.getElementById('divide').addEventListener("click", () => {

    if (values[0] == 0 || values[0] == null){
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        operator = divide;
    }
    else {
        values.push(Number(display.textContent));
        displayResult = "";
        display.textContent = "";
        if (operatorPressed !== "divide") {
            simpleCalculate()
        }
        else {
            operator = divide;
            simpleCalculate()
        }
        operatorPressed = "divide"
    }
})

document.getElementById('equals').addEventListener("click", () => {

    values.push(Number(display.textContent));
    switch(operatorPressed) {
        case "add":
            operator = add;
            break;
        case "subtract":
            operator = subtract;
            break;
        case "multiply":
            operator = multiply;
            break;
        case "divide":
            operator = divide;
            break;
    }
    simpleCalculate()
    displayResult = "";
    values[0] = 0;

})

document.getElementById('clear').addEventListener("click", () => {
    displayResult = "";
    display.textContent = "";
    values = []
})

const buttonPressed = e => {
    display.textContent = (displayResult += (e.target.id));
  }

for(i=0;i<10;i++){
    document.getElementById("" + i).addEventListener("click", buttonPressed);
}

document.getElementById(".").addEventListener("click", (buttonPressed));