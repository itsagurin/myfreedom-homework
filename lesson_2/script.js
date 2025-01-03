// task 1
let country = 'Sweden';
let access = country == 'Sweden' ? true : false;
console.log(access);

// task 2
let number = 10;

for (let i = 0; i < 10; i++) {
    number++;
}

console.log(number);

// task 3
for (let i = 0; i < 5; i += 1) {
    let userInput = prompt("Введите число:");

    if (userInput === 10) {
        console.log("Равно 10");
    } else {
        console.log("Не равно 10");
    }
}

// task 4
let count = prompt("Сколько чисел вывести?");

for (let i = 0; i < count; i++) {
    console.log(i ** 2);
}

// task 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// task 6
let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

// task 7
function printSquaresInRange(min, max) {
    for (let i = min; i <= max; i++) {
        return i * i;
    }
}

const min = prompt("Введите минимальное число:");
const max = prompt("Введите максимальное число:");
console.log(printSquaresInRange(min, max));

// task 8
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
    const red = getRandomInteger(0, 256);
    const green = getRandomInteger(0, 256);
    const blue = getRandomInteger(0, 256);

    return `rgb(${red},${green},${blue})`;
}

console.log(getRandomRGB());

// task 9
function checkNumberType(n) {
    for (let i = 1; i <= n; i += 0.5) {
        if (Number.isInteger(i)) {
            console.log(`${i} integer`);
        } else {
            console.log(`${i} decimal`);
        }
    }
}

const n = prompt("Введите число:");
checkNumberType(n);

// task 10
function calcPrice(days) {
    const dailyRate = 40;
    let totalCost = days * dailyRate;

    if (days >= 7) {
        totalCost -= 50;
    } else if (days >= 3) {
        totalCost -= 20;
    }

    console.log(`Стоимость аренды на ${days} дней: $${totalCost}`);
}

const days = prompt("Введите количество дней аренды:");
calcPrice(days);