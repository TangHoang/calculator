// get correct sizing for mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

// Variables
let operation;
let num_1 = "";
let num_2 = "";
let numbers = [];
let passed = false;
let result;
let str_num_1 = "";
let str_num_2 = "";
let firstOperator = true; //true if there is only one operator, false if there is more than one operator
let operationForDisplay; // variable just for display purposes

// buttons
const buttons = document.querySelectorAll(".input");

const buttonMult = document.getElementById("mult");
const buttonDivide = document.getElementById("divide");
const buttonAdd = document.getElementById("add");
const buttonSub = document.getElementById("sub");
const buttonEquals = document.getElementById("equals");

const buttonNegate = document.getElementById("neg");
const buttonDelete = document.getElementById("delete");
const buttonClear = document.getElementById("clear");

const display = document.querySelector(".display");

// button click events
buttons.forEach((button) => {button.addEventListener("click", input);});
buttonMult.onclick = () => {
    operationForDisplay = "*";
    if(firstOperator == false){
        operate(numbers, operation);
    }
    operation = "*";
    firstOperator = false;
}
buttonDivide.onclick = () => {
    operationForDisplay = "/";
    if(firstOperator === false){
        operate(numbers, operation);
    }
    operation = "/";
    firstOperator = false;
}
buttonAdd.onclick = () => {
    operationForDisplay = "+";
    if(firstOperator === false){
        operate(numbers, operation);
    }
    operation = "+";
    firstOperator = false;
}
buttonSub.onclick = () => {
    operationForDisplay = "-";
    if(firstOperator === false){
        operate(numbers, operation);
    }
    operation = "-";
    firstOperator = false;;
}
buttonEquals.onclick = () => {
    operationForDisplay = "";
    firstOperator = true;
    operate(numbers, operation);
    numbers.pop();
    console.log(numbers);
    // reset variables
    //numbers = [];
}
buttonDelete.onclick = () => {
    // remove last elements
    display.innerHTML = display.innerHTML.slice(0,-1);
    numbers.pop();
}
buttonClear.onclick = () => {
    numbers = [];
    operation = "";
    str_num_1 = "";
    str_num_2 = "";
    passed = false;
    result = null;
    display.innerHTML = "";
    firstOperator = true;
}
// functions

function input(e){ // save input of user in an array
    numbers.push(this.innerHTML);
    console.log(numbers);
    if(firstOperator === false){
        //display.innerHTML = "";
    }
    display.innerHTML = display.innerHTML + this.innerHTML;
}
function operate(numbers, operation){ // get numbers of input
    display.innerHTML = "";
    passed = false;
    split(numbers);
    num_1 = parseFloat(str_num_1);
    num_2 = parseFloat(str_num_2);

    // reset variables for next numbers for example (1+1)+1
    str_num_1 = "";
    str_num_2 = "";

    if(operation == "+"){return add(num_1, num_2);}
    if(operation == "-"){return sub(num_1, num_2);}
    if(operation == "*"){return mult(num_1, num_2);}
    if(operation == "/"){return div(num_1, num_2);}
}
function split(array){
    for(let i=0; i<array.length; i++){
        if(array[i] === "+" || array[i] === "*" || array[i] === "/" || array[i] === "-"){
            passed = true;
            continue;
        }
        if(passed == false){
            str_num_1 = str_num_1 + array[i];
            continue;
        }
        if(passed == true){
            str_num_2 = str_num_2 + array[i];
        }
    }
}
function add(a,b){
    result = a + b;
    numbers = [`${result}`, '+'];
    display.innerHTML = `${result}${operationForDisplay}`;
    return;
}
function sub(a,b){
    result = a - b;
    numbers = [`${result}`, '-'];
    display.innerHTML = `${result}${operationForDisplay}`;
    return;
}
function mult(a,b){
    result = a * b;
    numbers = [`${result}`, '*'];
    display.innerHTML = `${result}${operationForDisplay}`;
    return;
}
function div(a,b){
    if(b == 0){
        display.innerHTML = "Don't divide by 0!";
    }else{
        result = a / b;
        numbers = [`${result}`, '/'];
        display.innerHTML = `${result}${operationForDisplay}`;
    }
    return;
}


