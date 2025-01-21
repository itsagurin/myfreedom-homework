// task 10

// 1) Найти ul и добавить ему класс "list"
const ul = document.querySelector('ul');
ul.classList.add('list');

// 2) На li через один (начиная с первого) установить класс "item"
const liItems = ul.querySelectorAll('li');
liItems.forEach((li, index) => {
    if (index % 2 === 0) { // Проверяем, является ли индекс четным
        li.classList.add('item');
    }
});

// 3) На все ссылки установить класс "custom-link"
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.classList.add('custom-link');
});
