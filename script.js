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

const inputBox = document.getElementById("input-box");

// Make the calculator button grid
const numberButtons = document.getElementById("numbers");

const row = 3
const col = 3

const containerSize = 12;
const cellSize = containerSize / row;

let numberTyped = false;

for (i=0; i < row*col; i++){
    const cell = document.createElement("button");
    cell.id = i+1
    cell.style.width = `${cellSize}vw`
    cell.textContent = i+1;

    cell.addEventListener("click", () => {
        inputBox.value += cell.textContent
        numberTyped = true;
    });

    numberButtons.appendChild(cell)
}



// Handling button clicks
let operator = false;

const addBtn = document.getElementById("add")
const subBtn = document.getElementById("subtract")
const mtplyBtn = document.getElementById("multiply")
const divBtn = document.getElementById("divide")

addBtn.addEventListener("click", () => {
    if (!operator && numberTyped){
        inputBox.value += addBtn.textContent;
        operator = true;
    }
})

// Clear Entry
document.getElementById("clear").addEventListener("click", () => {
    inputBox.value = " ";
    operator = false;
    numberTyped = false;
    console.log("hi");
});


