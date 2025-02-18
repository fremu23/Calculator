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

const operate = function(num1, num2){
    // if "add" {add}
    // else if "subtract" {subtract}
    // else if "multiply" {multiply}
    // else if "divide" {divide}
}

// num1 variable
// operator variable
// num2 variable


// Make the calculator button grid
const numberButtons = document.getElementById("numbers");

const row = 3
const col = 3

const containerSize = 12;
const cellSize = containerSize / row;

for (i=0; i < row*col; i++){
    const cell = document.createElement("button");
    cell.classList.add("cell")
    cell.style.width = `${cellSize}vw`
    cell.textContent = i+1;

    numberButtons.appendChild(cell)
}
