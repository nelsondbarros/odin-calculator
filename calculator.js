let displayResult = "";
let value1, value2, valueTemp;
let operator;
var values = []
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


// buttons.forEach((button) => {button.addEventListener('click', () => {   

// })})
document.getElementById('add').addEventListener("click", () => {

    // value1 = display.textContent;
    // displayResult = "";
    // display.textContent = "";
    // operator = add;

    values.push(Number(display.textContent));
    displayResult = "";
    display.textContent = "";
    operator = add;

})

document.getElementById('subtract').addEventListener("click", () => {
    // value1 = display.textContent;
    // displayResult = "";
    // display.textContent = "";
    // operator = subtract;

    values.push(Number(display.textContent));
    displayResult = "";
    display.textContent = "";
    operator = subtract;
})

document.getElementById('multiply').addEventListener("click", () => {
    // value1 = display.textContent;
    // displayResult = ""
    // display.textContent = "";
    // operator = multiply;

    values.push(Number(display.textContent));
    displayResult = "";
    display.textContent = "";
    operator = multiply;
})

document.getElementById('divide').addEventListener("click", () => {
    // value1 = display.textContent;
    // displayResult = ""
    // display.textContent = "";
    // operator = divide;

    values.push(Number(display.textContent));
    displayResult = "";
    display.textContent = "";
    operator = divide;
})

document.getElementById('equals').addEventListener("click", () => {

    // value2 = display.textContent;
    // displayResult = "";
    // display.textContent = "";
    // let result = operate(operator, Number(value1), Number(value2));
    // if(typeof result === 'string'){
    //     display.textContent = "Cannot divide 0 by 0"
    // }
    // else{
    //     display.textContent = (Math.round(result * 100)/100);
    // }

    values.push(Number(display.textContent));
    displayResult = "";
    display.textContent = "";
    let result = operate(operator, values.at(-1), values.at(-2) );
    display.textContent = (Math.round(result * 100) / 100);

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