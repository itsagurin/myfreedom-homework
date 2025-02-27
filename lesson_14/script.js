// task 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

function Car(brand) {
  this.brand = brand;
  this.drive = function () {
    console.log("drive");
  };
}

const car = new Car("Tesla");
console.log(car);
console.log(car.drive());

// task 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает
// два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
//
// sum() возвращает сумму введённых свойств.
//
// mul() возвращает произведение введённых свойств

class Calculator {
  constructor() {
    this.a = +prompt("Enter first number");
    this.b = +prompt("Enter second number");
  }

  sum() {
    return this.a + this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

const calc = new Calculator();
console.log(calc.sum());

// task 3
// 1. Реализовать следующее мини-приложение
// https://gist.github.com/zhekix
//
// 2. Добавить к приложению желтый круг (пример ЗДЕСЬ)
//
// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры),
// color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен
// отрисоваться круг с заданными стилями.

class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    // метод должен создать тег img
    // вложить в него src картинки (this.imgUrl)
    // и записать в this.html
    // + дергаем render

    // + странице должен залится фон черным
    this.html = document.createElement("img");
    this.html.src = this.imgUrl;
    document.body.appendChild(this.html);
    document.body.style.backgroundColor = "black";
    this.render();
  }

  render() {
    // метод должен отрисовать изображение (this.html) на странице
    // применить фиксированное позиционирование
    // использовать this.top и this.left для указания позиции
    // использовать this.width для указания ширины
    if (!this.html) {
      this.html.style.position = "fixed";
      this.html.style.top = this.top + "px";
      this.html.style.left = this.left + "px";
      this.html.style.width = this.width + "px";
    }
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    // + дергаем render
    this.top -= 20;
    this.render();
  }
  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    // + дергаем render
    this.top += 20;
    this.render();
  }
  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    // + дергаем render
    this.left -= 20;
    this.render();
  }
  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    // + дергаем render
    this.left += 20;
    this.render();
  }
}

class Circle {
  constructor(size, color) {
    this.size = size;
    this.color = color;
    this.html = null;
  }

  render() {
    this.html = document.createElement("div");
    this.html.style.width = this.size + "px";
    this.html.style.height = this.size + "px";
    this.html.style.backgroundColor = this.color;
    this.html.style.borderRadius = "50%";
    this.html.style.position = "fixed";
    document.body.appendChild(this.html);
  }

    moveUp() {
        this.top -= 20;
        this.render();
    }

    moveDown() {
        this.top += 20;
        this.render();
    }

    moveLeft() {
        this.left -= 20;
        this.render();
    }

    moveRight() {
        this.left += 20;
        this.render();
    }
}

const imgUrl = 'https://bit.ly/2tcDito';
let mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();

let circle = new Circle(100, 'yellow');
circle.render();