// task 1
const userName = prompt("Введите ваше имя:");
alert('Привет, ' + userName);

// task 2
const number = prompt("Введите число:");
const power = prompt("Введите степень:");
alert(number ** power);

// task 4
let text = "my text";
if (text === "some text") {
    text = "another text";
} else {
    text = "some text";
}

// task 5
let num = 5;

if (num === 0) {
    num = 1;
} else if (num < 0) {
    num = "less then zero";
} else {
    num *= 10;
}

// task 6
const userInput = prompt("Введите число:");
let result;

if (Number(userInput) < 5) {
    result = '0';
} else {
    result = '1';
}

alert(result);

// task 7
const num1 = prompt("Введите первое число:");
const num2 = prompt("Введите второе число:");

if (Number(num1) > Number(num2)) {
    alert('Большее число: ' + num1);
} else if (Number(num1) < Number(num2)) {
    alert('Большее число: ' + num2);
} else {
    alert("Оба числа равны.");
}

// task 8
const num3 = prompt("Введите первое число:");
const num4 = prompt("Введите второе число:");

if (Number(num3) % Number(num4) === 0) {
    alert(num3 + ' является кратным ' + num4);
} else {
    alert(num3 + ' не является кратным ' + num4);
}

// task 9
const averageScore = prompt("Введите ваш средний балл:");

if (averageScore >= 1 && averageScore <= 4) {
    alert("Двоечник, иди учись!");
} else if (averageScore >= 5 && averageScore <= 8) {
    alert("Неплохо, но давай еще поднажмем!");
} else if (averageScore >= 9 && averageScore <= 10) {
    alert("Ого, да ты настоящий отличник!");
} else {
    alert("Введите корректный средний балл от 1 до 10.");
}

// task 10
const examScore = prompt("Введите балл за экзамен (от 0 до 100):");
const projectCount = prompt("Введите количество выполненных проектов (от 0 и больше):");

let finalScore;

if (Number(examScore) > 90 || Number(projectCount) > 10) {
    finalScore = 100;
} else if (Number(examScore) > 75 && Number(projectCount) >= 5) {
    finalScore = 90;
} else if (Number(examScore) > 50 && Number(projectCount) >= 2) {
    finalScore = 75;
} else {
    finalScore = 0;
}

alert('Ваш выпускной балл: ' + finalScore);

// task 11
const days = prompt("Введите количество дней аренды:");

const dailyRate = 40;
let totalCost = dailyRate * Number(days);
let discount = 0;

if (days >= 7) {
    discount = 50;
} else if (days >= 3) {
    discount = 20;
}

totalCost -= discount;

alert('Общая стоимость аренды на ' + days + ' дней: $' + totalCost);

