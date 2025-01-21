// task 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
//
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ...
//
// (необходимые значения добавьте с помощью BOM)

const os = navigator.platform;
const browser = navigator.userAgent;
const url = location.href;

console.log(`На компьютере с ОС ${os} с помощью браузера ${browser} я открыл страничку ${url}`);

// task 2
// В файле html есть разметка (добавьте ее в свой файл html):
//
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
//
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
//
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

const list = document.getElementById('list');
const items = list.children;

for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
    items[i].textContent = i;
}

// task 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код,
// который найдет в HTML все элементы с классом "forRemove" и удалит их.

const elements = document.querySelectorAll('.forRemove');

elements.forEach(element => {
    element.remove();
});

// task 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили:
// размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const p = document.createElement('p');
p.textContent = 'Some text';
p.style.fontSize = '36px';
p.style.fontWeight = 'bold';

document.body.appendChild(p);

// task 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета,
// содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом
// и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function createTag(tag, color, content) {
    const elem = document.createElement(tag);
    elem.textContent = content;
    elem.style.color = color;
    return elem;
}

const elem1 = createTag('h1', 'red', 'Header 1');
const elem2 = createTag('p', 'green', 'Paragraph');

console.log(elem1);
console.log(elem2);

// task 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле)
// добавить в этот select опции (option) под годы от 1960 по 2020.

const select = document.createElement('select');

for (let i = 1960; i <= 2020; i++) {
    const option = document.createElement('option');
    option.textContent = i;
    select.appendChild(option);
}

// task 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
//
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
//
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
//
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта
// (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order:
// если true – то оплатил, если false – то отменил.

const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
];

const ul = document.getElementById('clientsList');

clients.forEach(client => {
    const li = document.createElement('li'); // Создаем элемент li
    li.textContent = `Клиент ${client.name} ${client.order ? 'оплатил' : 'отменил'} заказ`; // Формируем текст
    ul.appendChild(li); // Добавляем li в ul
});

// task 8
// Есть массив ссылок:
//
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
//
// Вам нужно:
//
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
//
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
//
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
//
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// Массив ссылок
let linksArr = [
    'https://www.amazon.com/',
    'https://www.youtube.com/',
    'https://devby.io/',
    'https://www.google.com/',
    'https://apple.com/'
];

const div = document.createElement('div');
div.style.background = '#f0f0f0';
div.style.padding = '20px';
div.style.borderRadius = '10px';

linksArr.forEach(link => {
    const a = document.createElement('a');
    a.href = link;
    a.textContent = link;
    a.target = '_blank';
    a.style.display = 'block';
    a.style.marginBottom = '10px';
    div.appendChild(a);
});

document.body.appendChild(div);

// task 9
// Есть массив объектов с полями name, age. Например:
//
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
//
// Создать в html таблицу (table).
//
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст.
// Имена должны быть красного цвета, age - синего.
//
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться
// столько, сколько объектов внутри массива, и их количество может быть любым.

const users = [
    { name: 'Mark', age: 12 },
    { name: 'Olga', age: 30 },
    { name: 'Tom', age: 25 },
    { name: 'Den', age: 43 }
];

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.border = '1px solid black';

users.forEach(user => {
    const tr = document.createElement('tr'); // Создаем строку

    const nameTd = document.createElement('td');
    nameTd.textContent = user.name;
    nameTd.style.color = 'red';
    nameTd.style.border = '1px solid black';
    nameTd.style.padding = '8px';

    const ageTd = document.createElement('td');
    ageTd.textContent = user.age;
    ageTd.style.color = 'blue';
    ageTd.style.border = '1px solid black';
    ageTd.style.padding = '8px';

    tr.appendChild(nameTd);
    tr.appendChild(ageTd);

    table.appendChild(tr);
});

document.getElementById('tableContainer').appendChild(table);
