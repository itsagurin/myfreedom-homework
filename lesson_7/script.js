// task 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul
// должен добавляться элемент li. Содержимое li - нажатая клавиша.

const inputBox = document.getElementById('input-box');
const ul = document.getElementById('key-list');

inputBox.addEventListener('keydown', (event) => {
    const key = event.key;
    const li = document.createElement('li');
    li.textContent = key;
    ul.appendChild(li);
});

// task 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст
// каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля).
// Вам понадобится считывать значение поля, это input.value

inputBox.addEventListener('keyup', (event) => {
    console.log(inputBox.value);
});

// task 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется,
// добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы
// инпут должен быть очищен (проставить пустую строку в value).

const form = document.getElementById('text-form');
const input = document.getElementById('input-text');
const ul2 = document.getElementById('text-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        ul2.appendChild(li);
        input.value = '';
    }
});

// task 4
// Калькулятор.
//
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой.
// Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь
// вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется
// действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем"
// значение  select.value). Результат отображается в div.
//
// 1) решить с помощью if (я выбрал этот вариант)
//
// 2) решить с помощью evel (https://developer.mozilla.org/...) (я выбрал этот вариант)

const form2 = document.getElementById('calc-form');
const result = document.getElementById('result');

form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    const expression = `${num1} ${operation} ${num2}`;
    const resultNum = eval(expression);
    result.textContent = `Результат: ${resultNum}`;
});

// task 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке).
// При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении
// мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов.
// Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const button = document.getElementById('random-button');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomAngle() {
    return Math.floor(Math.random() * 361) - 180;
}

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = getRandomColor();
});

button.addEventListener('mouseleave', () => {
    const angle = getRandomAngle();
    button.style.transform = `rotate(${angle}deg)`;
});