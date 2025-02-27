// Reference the Input Box
const inputBox = document.getElementById("input-box");

const add = function(num1, num2){
    return num1 + num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const multiply = function(num1, num2){
    return num1 * num2;
}

const divide = function(num1, num2){
    return num1 / num2;
}

const operate = function(num1, operator, num2){
    let result;
    if (operator == "+"){
        result = add(num1,num2);
    } else if (operator == "-"){
        result = subtract(num1, num2);
    } else if (operator == "x"){
        result = multiply(num1,num2);
    } else if (operator == "/"){
        result = divide(num1, num2);
    }

    inputBox.value = "";

    inputBox.value = result;
};

// Array of Operators
operators = ["+", "-", "x", "/"];

// Make the calculator button grid
const numberButtons = document.getElementById("numbers");

const row = 3;
const col = 3;

const containerSize = 12;
const cellSize = containerSize / row;

let numberTyped = false;

for (i=0; i < row*col; i++){
    const cell = document.createElement("button");
    cell.id = i+1;
    cell.style.width = `${cellSize}vw`;
    cell.textContent = i+1;

    cell.addEventListener("click", () => {
        inputBox.value += cell.textContent;
        numberTyped = true;
    });

    numberButtons.appendChild(cell);
}



// Handling button clicks
let operator = false;

document.addEventListener('click', (event) => {
    const clicked = event.target;

    // Number 0 
    if (clicked.matches(".zero")){
        inputBox.value += clicked.textContent;
        numberTyped = true;
    }

    // Operators to input box
    if (clicked.matches('#add, #subtract, #multiply, #divide')){
        if (!operator && numberTyped){
            inputBox.value += clicked.textContent;
            operator = true;
        };
    }

    // CE Button
    if (clicked.matches('#clear')){
        inputBox.value = "";
        operator = false;
        numberTyped = false;
    };

    // Backspace Button
    if (clicked.matches('#backspace')){
        const currentVal = inputBox.value;
        const lastChar = currentVal.slice(-1);
        const secondLastChar = currentVal.slice(-2, -1);
        if (operators.includes(lastChar)){
            operator = false;
        } else if (secondLastChar == ""){
            numberTyped = false;
        } 
        
        inputBox.value = currentVal.slice(0, -1);
    }

    // Equals Buttons
    if (clicked.matches("#equals")){
        const currentVal = inputBox.value;
        const findOperator = currentVal.match(/[+\-x/]/);

        // Splitting operation for the operate function
        if (findOperator) {
            let preOperator = Number(currentVal.slice(0, findOperator.index));
            let postOperator = Number(currentVal.slice(findOperator.index+1));
            let operatorType = currentVal[findOperator.index];
            // Reset Booleans
            numberTyped = true;
            operator = false;

            operate(preOperator, operatorType, postOperator);


        }
    }
})



