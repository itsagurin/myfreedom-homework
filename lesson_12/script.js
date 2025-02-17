// task 1
// По данному url расположена задача:
//
// https://jsonplaceholder.typicode.com/todos/1
//
// В html предусмотреть <div></div>
//
// Достать с сервера заголовок задачи и отобразить его в div.

let xhr1 = new XMLHttpRequest();

xhr1.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr1.send();

xhr1.onload = function() {
    if (xhr1.status === 200) {
        const data = JSON.parse(xhr1.responseText);
        document.getElementById("task").textContent = data.title;
    }
};

// task 2
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
//
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи

let xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr2.send();

xhr2.onload = function() {
    if (xhr2.status === 200) {
        const data = JSON.parse(xhr2.responseText);
        let ul = document.createElement('ul');
        document.body.appendChild(ul);
        for (let i = 0; i < 20; i++) {
            let li = document.createElement('li');
            li.textContent = data[i].title;
            ul.appendChild(li);
        }
    }
};