"use strict"
//alert, prompt//

let numb1 = Number(prompt('Первое число'));
let numb2 = +prompt ('Второе число');
let quarter = (numb1 + numb2) *2;
console.log('Квадрат:', quarter);

let op1 = Number(prompt('Введите первое число'));
let op2 = +prompt ('Введите второе число ');
let average = (op1 + op2) /2 ;
console.log("среднее арифметическое:", average);

let minutes = prompt("Введите минуты:");
let seconds = minutes * 60;
alert(minutes + "минут в " + seconds + "секундах.");

let greeting = 'Hello, ';
let userName = prompt('What is your name?');  
alert (greeting + userName + '!');  
