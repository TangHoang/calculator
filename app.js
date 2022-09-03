let operation;
let num_1 = "";
let num_2 = "";
let numbers = [];
let passed = false;
let result;
let str_num_1 = "";
let str_num_2 = "";
/*
button0 = document.getElementById("num-0");
button1 = document.getElementById("num-1");
button2 = document.getElementById("num-2");
button3 = document.getElementById("num-3");
button4 = document.getElementById("num-4");
button5 = document.getElementById("num-5");
button6 = document.getElementById("num-6");
button7 = document.getElementById("num-7");
button8 = document.getElementById("num-8");
button9 = document.getElementById("num-9");
buttonDot = document.getElementById("dot");
*/

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


buttons.forEach((button) => {button.addEventListener("click", input);});
buttonMult.onclick = () => {
    operation = "*";
    display.innerHTML = "";
}
buttonDivide.onclick = () => {
    operation = "/";
    display.innerHTML = "";
}
buttonAdd.onclick = () => {
    operation = "+";
    display.innerHTML = "";
}
buttonSub.onclick = () => {
    operation = "-";
    display.innerHTML = "";
}
buttonEquals.onclick = () => {
    operate(numbers, operation);
}

buttonClear.onclick = () => {
    numbers = [];
    operation = "";
    str_num_1 = "";
    str_num_2 = "";
    passed = false;
    display.innerHTML = "";
}

function input(e){
    numbers.push(this.innerHTML);
    console.log(numbers);
    display.innerHTML = display.innerHTML + this.innerHTML;
}

function add(a,b){
    result = a + b;
    display.innerHTML = result;
    return;
}
function sub(a,b){
    result = a - b;
    display.innerHTML = result;
    return;
}
function mult(a,b){
    result = a * b;
    display.innerHTML = result;
    return;
}
function div(a,b){
    if(b == 0){
        display.innerHTML = "Don't divide by 0!";
    }else{
        result = a / b;
        display.innerHTML = result;
    }
    return;
}

function operate(numbers, operation){
    console.log(operation);
    split(numbers, operation);
    
    num_1 = parseInt(str_num_1);
    num_2 = parseInt(str_num_2);
    console.log(num_1);
    console.log(num_2);

    if(operation == "+"){return add(num_1, num_2);}
    if(operation == "-"){return sub(num_1, num_2);}
    if(operation == "*"){return mult(num_1, num_2);}
    if(operation == "/"){return div(num_1, num_2);}
}
function clear(){
    return;
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