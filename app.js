'use strict'

function add(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    
    const resultOpAdd = 'The sum of the numbers is equal to: '+(parseFloat(number1) + parseFloat(number2));
    result.textContent = resultOpAdd;
}
document.getElementById('add').addEventListener('click', add);


function subtract(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    const resultOpSub = 'The subtraction of the numbers is equal to: '+(parseFloat(number1) - parseFloat(number2));
    result.textContent = resultOpSub;
}
document.getElementById('subtract').addEventListener('click', subtract);

function multiply(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    const resultOpMul = 'The multiplication of the numbers is equal to: '+(parseFloat(number1) * parseFloat(number2));
    result.textContent = resultOpMul;
}
document.getElementById('multiply').addEventListener('click', multiply);

function divide(){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    const resultOpDiv = 'The multiplication of the numbers is equal to: '+(parseFloat(number1) / parseFloat(number2));
    result.textContent = resultOpDiv;
}
document.getElementById('divide').addEventListener('click', divide);
