//task 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом,
// должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
//
// Примеры результатов вызова функции:
//
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

function sum(a, b) {
    if (a === undefined || b === undefined) {
        return "Введите два параметра";
    }

    if (typeof a !== "number" || typeof b !== "number") {
        return "Введенные данные не являются числами";
    }

    return a + b;
}

console.log(sum(2, 4));
console.log(sum('d', 4));
console.log(sum(1, [2]));
console.log(sum(1));
console.log(sum());

//task 2
//Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

function square(a) {
    if (a === undefined) {
        console.error('Функция "square" не может быть вызвана без аргумента');
    }
    console.log(a * a);
}

square(10) // 100

square()

//task 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

const guessNumber = (number) => {
    if (number < 1 || number > 10) {
        return "Введите число от 1 до 10";
    }

    const random = Math.floor(Math.random() * 10) + 1;

    if (number === random) {
        return "Вы выиграли";
    }

    return `Вы не угадали, ваше число - ${number}, а выпало число - ${random}`;
}

console.log(guessNumber(5));

//task 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал.
// Используйте подходящий метод массива - forEach или map.\

function copyArr(arr) {
    return arr.map(item => item);
}

const arr = [1, 2, 3, 4, 5];
const copiedArr = copyArr(arr);
console.log(copiedArr);

//task 5
// Напишите функцию, которая принимает массив имен и возвращает новый массив, в
// котором каждое имя будет иметь приставку "Hello, "

function addHello(names) {
    return names.map(name => `Hello, ${name}`);
}

const names = ['John', 'Jane', 'Jack'];
const newNames = addHello(names);
console.log(newNames);

//task 6
// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив,
// содержащий только их имена

function getUsersNames(users) {
    return users.map(user => user.name);
}

const users = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 22},
    {name: 'Jack', age: 30}
];

const usersNames = getUsersNames(users);
console.log(usersNames);

//task 7
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами.
// Сумму чисел необходимо вернуть из функции.
//
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

function sumObjectValues(obj) {
    return Object.values(obj).reduce((sum, value) => {
        if (typeof value === 'number') {
            return sum + value;
        }
        return sum;
    }, 0);
}

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
};

console.log(sumObjectValues(objectWithNumbers));

//task 8
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst('hello'));

//task 9
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str) {
    return str.toLowerCase().includes('badword') || str.toLowerCase().includes('xxx');
}

console.log(checkSpam('Hello badword'));
console.log(checkSpam('Hello XXX'));

//task 10
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку).
// Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('привет, Женя'));

//task 11
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии.
// Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые
// данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.
// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
//
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
//
// ПОДСКАЗКА:
//
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

function getStationInfo(stations) {
    return stations.map(station => {
        const code = station.slice(0, 3);
        const name = station.slice(station.indexOf(';') + 1);
        return `${code}: ${name}`;
    });
}

const stationsInfo = getStationInfo(stations);
console.log(stationsInfo);

//task 12
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив,
// содержащий только уникальные элементы arr.
//
// Пример:
//
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
//
// ПОДСКАЗКА
//
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким
// образом в новый добавятся только уникальные.

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

console.log(unique(strings));

//task 13
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и
// сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им
// просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и
// выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек!
// Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
//
// В задании необходимо использовать методы массивов: forEach, slice, concat

function verifyCats(catsJane, catsJulia) {
    catsJane = catsJane.slice(1, -1);
    const cats = catsJane.concat(catsJulia);

    cats.forEach((age, index) => {
        if (age >= 2) {
            console.log(`Кошка № ${index + 1} взрослая, ей ${age} лет`);
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`);
        }
    });
}

const catsJane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
verifyCats(catsJane1, catsJulia1);

//task 14
// Решить 4 задание из прошлой темы, используя метод filter
//
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr,
// но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let array = [5, 4, 3, 8, 0];

function filterFor(arr, a) {
    return arr.filter(item => item >= a);
}

console.log(filterFor(array, 5));

//task 15
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только
// строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

function filterStrings(arr) {
    return arr.filter(item => item.length > 3);
}

const stringsData = ['yes', 'hello', 'no', 'easycode', 'what'];
console.log(filterStrings(stringsData));

//task 16
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
// (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
//
// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это
// элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами
// и обладают всеми свойствами массивов.

const arrOfArr = [[14, 45], [1], ['a', 'c', 'd']];

function sortArr(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortArr(arrOfArr));

//task 17
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет
// следующие действия по порядку:
//
// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года,
// человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст =
// возраст кошки * 7. (сделать через map)
// 2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
// 3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
//
// В задании необходимо использовать методы массивов: map, filter, reduce

function getAverageHumanAge(catAges) {
    const humanAges = catAges.map(age => age <= 2 ? age * 10 : age * 7);
    const adultHumanAges = humanAges.filter(age => age >= 18);
    const sum = adultHumanAges.reduce((sum, age) => sum + age, 0);
    return sum / adultHumanAges.length;
}

const catAges1 = [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2];

console.log(getAverageHumanAge(catAges1));