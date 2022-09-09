// get correct sizing for mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

// Variables
let operation;
let negate = false;
let negatedNumber;
let num_1 = "";
let num_2 = "";
let numbers = [];
let passed = false;
let result;
let str_num_1 = "";
let str_num_2 = "";
let firstOperator = true; //true if there is only one operator, false if there is more than one operator
let operationForDisplay; // variable just for display purposes

let uniCodeSub = "&#65293;";
let uniCodeMult = "&#215;";
let uniCodeDiv = "&#247;";

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
    operationForDisplay = uniCodeMult;
    if(firstOperator == false){
        operate(numbers, operation);
    }
    operation = uniCodeMult;
    firstOperator = false;
}
buttonDivide.onclick = () => {
    operationForDisplay = uniCodeDiv;
    if(firstOperator === false){
        operate(numbers, operation);
    }
    operation = uniCodeDiv;
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
    operationForDisplay = uniCodeSub;
    if(firstOperator === false){
        operate(numbers, operation);
    }
    operation = uniCodeSub;
    firstOperator = false;;
}
buttonNegate.onclick = () => {
    negate = true;
    buttonNegate.classList.add("negate-active");
}
buttonEquals.onclick = () => {
    operationForDisplay = "";
    firstOperator = true;
    operate(numbers, operation);
    numbers.pop();
    console.log(numbers);
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
    if(negate == true){
        numberInput = "-" + this.innerHTML;
        display.innerHTML = display.innerHTML + "(" + numberInput + ")";
        negate = false;
    }else{
        numberInput = this.innerHTML;
        display.innerHTML = display.innerHTML  + numberInput;
    }
    numbers.push(numberInput);
    buttonNegate.classList.remove("negate-active");
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
    if(operation == uniCodeSub){return sub(num_1, num_2);}
    if(operation == uniCodeMult){return mult(num_1, num_2);}
    if(operation == uniCodeDiv){return div(num_1, num_2);}
}
function split(array){
    // function first concantenates chars until we iterate over a char that does not contain a number
    // then we set passed to true, to start concatenating the rest of the chars
    for(let i=0; i<array.length; i++){
        if(isNaN(array[i])){
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
    numbers = [`${result}`, uniCodeSub];
    display.innerHTML = `${result}${operationForDisplay}`;
    return;
}
function mult(a,b){
    result = a * b;
    numbers = [`${result}`, uniCodeMult];
    display.innerHTML = `${result}${operationForDisplay}`;
    return;
}
function div(a,b){
    if(b == 0){
        display.innerHTML = "Don't divide by 0!";
    }else{
        result = a / b;
        numbers = [`${result}`, uniCodeDiv];
        display.innerHTML = `${result}${operationForDisplay}`;
    }
    return;
}


