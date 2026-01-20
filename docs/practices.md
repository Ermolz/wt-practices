# Практикуми з веб-програмування

Повний опис всіх практичних завдань з посиланнями на файли та прикладами коду.

## Практикум з JavaScript

Базові операції з масивами, рядками та об'єктами в Node.js.

1. [Максимальний елемент](../practices/javascript-practice/1-max-element.js) - знаходження максимального елемента масиву (процедурний та функціональний стилі)
2. [Сортування масивів](../practices/javascript-practice/2-array-sorting.js) - сортування масиву за спаданням без зміни оригіналу
3. [Нетранзитивні порівняння](../practices/javascript-practice/3-nontransitive-comparison.js) - приклади нетранзитивних порівнянь в JavaScript
4. [Підрахунок символів](../practices/javascript-practice/4-character-count.js) - підрахунок входжень кожного символа в рядку
5. [Пошук анаграм](../practices/javascript-practice/5-anagram-search.js) - пошук груп анаграм у словнику

## Найпростіші клієнт-серверні застосунки

Робота з Node.js та Express для створення простих серверів.

1. [Знайомство з Node.js](../practices/client-server-apps/1-nodejs-intro.js) - базовий HTTP сервер на Node.js
2. [Знайомство з Express](../practices/client-server-apps/2-express-intro.js) - простий Express сервер
3. [Передача статичного тексту](../practices/client-server-apps/3-static-text.js) - відправка статичного тексту клієнту
4. [Передача статичного файлу](../practices/client-server-apps/4-static-file/) - сервер для статичних HTML файлів
5. [Сторінка з гіпертекстовим посиланням](../practices/client-server-apps/5-hyperlink-page/) - HTML сторінка з посиланнями

## Проста форма

1. [Демонстрація передачі даних у формі](../practices/simple-form/1-form-data/)
2. [Приклад простої XSS-атаки](../practices/simple-form/2-xss-attack/)
3. [POST-запити: обговорення](../practices/simple-form/3-post-requests/)

## Схема практикуму

1. Читання файлу - обговорення
2. JSON-серіалізація
3. Знайомство з Postman
4. Робот-шпигун - факультативно
5. Поштовий бот

## Схема практикуму

1. [Поспішне виведення (демонстрація, обговорення)](../practices/async-practice/1-hasty-output/)
2. [Шлях до асинхронності](../practices/async-practice/2-async-path/)
3. [Обгортка в проміс](../practices/async-practice/3-promise-wrapper/)
4. [Проміс-читач](../practices/async-practice/4-promise-reader/)
5. [Вторгнення у вічність](../practices/async-practice/5-eternity-invasion/)
6. [Браузерний паралелізм](../practices/async-practice/6-browser-parallelism/)

## Схема практикуму

1. Базові вправи
2. Додавання вузла
3. Практикум з обробки подій: спливання подій, валідація форм
4. Простий AJAX - обговорення
5. Браузерний паралелізм
6. Примітивний рендеринг - обговорення

## Практикум з React

* [https://reactjs.org](https://reactjs.org)
* [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
* [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)

1. [Найпростіший приклад React](../practices/react-practice/1-simple-example.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo React components</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
<div id="content">

</div>
<script type="text/babel">
    const root = ReactDOM.createRoot(document.getElementById('content'));
    root.render(<h1>Hello, world!</h1>);
</script>

</body>
</html>

```

2. [Компонент у стилі класу](../practices/react-practice/2-class-component.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Components in a class style</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
<div id="content">

</div>
<script type="text/babel">
    class Book extends React.Component {
        render() {
            return (
            <div>
            <p><strong>Автор: </strong> {this.props.author} </p>
            <p><strong>Назва: </strong> {this.props.title} </p>
        </div>
            ) ;
        }
    }
   const root = ReactDOM.createRoot(document.getElementById('content'));
    root.render(<Book author="Ivanov" title="How to cheat"></Book>);
    
</script>
```

3. [Компонент у функціональному стилі](../practices/react-practice/3-functional-component.html)

```javascript
function Book(props) {
        return (
            <div>
                <p><strong>Автор: </strong> {props.author} </p>
                <p><strong>Назва: </strong> {props.title} </p>
            </div>
        ) ;
    }

```

4. [Відображення масиву](../practices/react-practice/4-array-display.html)

```javascript
class Books extends React.Component {
        render() {
            return this.props.catalog.map((book) =>
                <Book author={book.author} title={book.title}></Book>);
            }

    }

```

## Практикум з відображення

* [Веб-застосунок з RESTful API та React](../practices/display-practice/)

## Практикум з сховищ даних

* [Веб-застосунок з браузерними сховищами](../practices/storage-practice/)
    * Відвідувач бачить, скільки разів він відвідав даний сайт (localStorage)
    * Відвідувач бачить, скільки разів він переходив зі сторінки на сторінку в межах даного сеансу (sessionStorage)
    * Перевірка доступу до даних з іншого сайту (CORS тест)

## Практикум з WEBASSEMBLY WEB ASSEMBLY

* [https://webassembly.org/](https://webassembly.org/)
* [https://medium.com/devschacht/daniel-simmons-get-started-with-webassembly-using-only-14-lines-of-javascript-89960df71498](https://medium.com/devschacht/daniel-simmons-get-started-with-webassembly-using-only-14-lines-of-javascript-89960df71498)
* [https://mbebenita.github.io/WasmExplorer/](https://mbebenita.github.io/WasmExplorer/)

1. **Функція**

```cpp
int squarer(int num) {
  return num * num;
}

```

2. **Код на JS**

```javascript
let squarer;

function loadWebAssembly(fileName) {
    return fetch(fileName)
        .then(response => response.arrayBuffer())
        .then(buffer => WebAssembly.compile(buffer))
        .then(module => {return new WebAssembly.Instance(module) });
};

loadWebAssembly('test.wasm')
    .then(instance => {
        squarer = instance.exports._Z7squareri;
        document.write(squarer(25));
    });

```

## Практикум з MongoDB – перше знайомство

* Основне джерело для download – [www.mongodb.com](https://www.mongodb.com)

1. **Встановлення та автономна перевірка MongoDB**
   1.1. Скачуємо та інсталюємо MongoDB. Можна зробити кастомну інсталяцію та вказати, в який каталог буде інстальовано.
   1.2. Готуємо каталог для зберігання даних. За замовченням – `с:\data\db`. Можна змінити при запуску.
   1.3. Запускаємо сервер `mongod`. Щоб вказати каталог для зберігання даних:
```bash
mongod --dbpath <directory>

```


1.4. Перевіряємо роботу БД автономно. Для цього запускаємо клієнтську консоль `mongo`.
1.5. В середовищі `mongo` даємо команди:
* `show dbs` — перегляд існуючих баз даних
* `use test` — вибір бази даних; якщо не було — вона створиться
* `db.createCollection("users")` — створюємо колекцію users
* `show collections` — перегляд колекцій в активній БД
* `db.users.save({name:"Ivanov",age:50})` — додавання до колекції users нового документа
* `db.users.save({name:"Petrova",age:25})` — додавання до колекції users ще одного документа
* `db.users.find()` (або `db.users.find().pretty()`) — відображення документів з колекції


2. **Взаємодія Node.js та MongoDB**
   2.1. Створюємо новий проект (папку) — наприклад, `mongoapp`.
   2.2. Створюємо файл `package.json` — основний конфігураційний файл, який описує проект:
```json
{
  "name": "demomongo2021",
  "version": "1.0.0",
  "dependencies": {
    "mongodb": "^3.1.0",
    "mongoose": "^5.10.4"
  }
}

```


2.3. Якщо потрібний пакет ще не завантажений, з папки проекту даємо команду:
```bash
npm install

```


Менеджер пакетів npm підтягне пакети, які описані в `package.json`.
2.4. Запускаємо наступну програму, яка виводить на екран вміст колекції:
```javascript
"use strict";
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoClient.connect(function (err, client) {
    if (err) {
       throw err;
    }
    const db = client.db("test");
    const collect = db.collection("users");
    collect.find().toArray(function (err, results) {
        for (let i = 0; i < results.length; i++) {
            console.log(results[i].name + " - " + results[i].age);
        }
        client.close();
    });
});

```

**Виведення:**

```text
Ivanov - 50
Petrova - 25
```
