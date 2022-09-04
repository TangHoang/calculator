// Variables
let operation;
let num_1 = "";
let num_2 = "";
let numbers = [];
let passed = false;
let result;
let str_num_1 = "";
let str_num_2 = "";
let counter = 0;

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
    operation = "*";
    display.innerHTML = "";
    if(counter != 0){
        operate(numbers, operation);
    }
    counter = counter + 1;

}
buttonDivide.onclick = () => {
    operation = "/";
    display.innerHTML = "";
    if(counter != 0){
        operate(numbers, operation);
    }
    counter = counter + 1;
}
buttonAdd.onclick = () => {
    operation = "+";
    display.innerHTML = "";
    if(counter != 0){
        operate(numbers, operation);
    }
    counter = counter + 1;
}
buttonSub.onclick = () => {
    operation = "-";
    display.innerHTML = "";
    if(counter != 0){
        operate(numbers, operation);
    }
    counter = counter + 1;
}
buttonEquals.onclick = () => {
    operate(numbers, operation);
    // reset variables
    counter = 0;
    numbers = [];
}
buttonDelete.onclick = () => {
    // remove last elements
    display.innerHTML.slice(0,-1);
    numbers.slice(0,-1);
}
buttonClear.onclick = () => {
    numbers = [];
    operation = "";
    str_num_1 = "";
    str_num_2 = "";
    passed = false;
    result = null;
    display.innerHTML = "";
    counter = 0;
}
// functions

function input(e){ // save input of user in an array
    numbers.push(this.innerHTML);
    console.log(numbers);
    if(counter > 0){
        display.innerHTML = "";
    }
    display.innerHTML = display.innerHTML + this.innerHTML;
}
function operate(numbers, operation){ // get numbers of input
    display.innerHTML = "";
    split(numbers, operation);
    
    num_1 = parseInt(str_num_1);
    num_2 = parseInt(str_num_2);

    // reset variables for next numbers for example (1+1)+1
    str_num_1 = "";
    str_num_2 = "";
    passed = false;

    console.log(num_1);
    console.log(num_2);
   
    if(operation == "+"){return add(num_1, num_2);}
    if(operation == "-"){return sub(num_1, num_2);}
    if(operation == "*"){return mult(num_1, num_2);}
    if(operation == "/"){return div(num_1, num_2);}
}
function split(array, operation){
    for(let i=0; i<array.length; i++){
        if(array[i] === operation){
            passed = true;
            continue;
        }
        if(passed == false){
            str_num_1 = str_num_1 + array[i];
            console.log(str_num_1);
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
    display.innerHTML = result;
    console.log(numbers);

    return;
}
function sub(a,b){
    result = a - b;
    numbers = [`${result}`, '-'];
    display.innerHTML = result;
    return;
}
function mult(a,b){
    result = a * b;
    numbers = [`${result}`, '*'];
    display.innerHTML = result;
    return;
}
function div(a,b){
    if(b == 0){
        display.innerHTML = "Don't divide by 0!";
    }else{
        result = a / b;
        numbers = [`${result}`, '/'];
        display.innerHTML = result;
    }
    return;
}


