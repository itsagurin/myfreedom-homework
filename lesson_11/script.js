// task 1
// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5

let i = 1;
let timerId = setInterval(() => {
    console.log(i);
    i++;
    if (i > 5) {
        clearInterval(timerId);
    }
}, 2000);

// task 2
// Сделать виджет - цифровые часы, оформить по желанию.
//
// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и
// забирать из него необходимую информацию.

let clock = document.querySelector('.clock');

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

}

setInterval(showTime, 1000);