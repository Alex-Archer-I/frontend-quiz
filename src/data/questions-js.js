const questionsJS = [
    {
        question: 'В чем основное различие между let и const?',
        answers: [
            {
                text: 'С помощью let объявляются сложные типы данных, а с помощью const - примитивы.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'let - устаревшая форма объявления переменных, а const - актуальная.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Как и между сталактитами и сталагмитами, нам никогда не понять разницу между ними.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'let объявляет переменные, значение которых может быть изменнено в дальнейшем, в отличие от const.',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 0,
    },
    {
        question: 'Какое из этих выражений вернет true?',
        answers: [
            {
                text: '3 > 4 && 3 > 2',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: '3 > 4 || 3 > 2 && 3 > 10',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Никакое, ведь истина не может быть в цифрах и палочках.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: '10 < 21 && 3 > 2 || 7 < 3',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 1,
    },
    {
        question: 'Что возвращает специальный метод массива map?',
        answers: [
            {
                text: 'Новый массив с рандомно перемешанными элементами.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Массив с объектами содержашими информацию о каждом элементе старого массива.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Строку с координатами сокровища.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Новый массив, созданный путем применения функции-аргумента ко всем элементам старого массива.',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 2,
    },
    {
        question: 'Какой синтаксис правильный?',
        answers: [
            {
                text: 'element.style.background-color = "rgb(255, 255, 255)"',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'element.style.backgroundcolor = "rgb(255, 255, 255)"',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'element.style.bAcKgRoUnDcOlOr = "rgb(255, 255, 255)"',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'element.style.backgroundСolor = "rgb(255, 255, 255)"',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 3,
    },
    {
        question: 'Что означает "use strict"?',
        answers: [
            {
                text: 'Это команда, запрещающая использование синтаксиса try-catch.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Это ключевое слово запрещающее импрот модулей из этого скрипта.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Это напоминание о тяжелой работе JS-разработчиков.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Это команда при которой скрипт работает с возможностями версии ES5 и старше.',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 4,
    },
    {
        question: 'В каком из этих случаев массив будет скопирован в отдельную переменую?',
        answers: [
            {
                text: 'const newArr = oldArr;',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'const newArr = oldArr.copy();',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'newArr.copyPleaseThisArray(oldArr);',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'const newArr = [...oldArr];',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 5,
    },
    {
        question: 'Что содержит свойство target специального объекта Event?',
        answers: [
            {
                text: 'Элемент, который должен измениться в результате события.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Объект с метаданными html-файла.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Жизненную цель пользователя.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Элемент, который является целью события.',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 6,
    },
    {
        question: 'В каком варианте правильно выбран элемент с id="element"?',
        answers: [
            {
                text: 'document.getElementById(id="element");',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'document.getElementById("#element");',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'document.querySelector("element");',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'document.querySelector("#element");',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 7,
    },
    {
        question: 'В чем главное отличие сравнений с помощью операторов "==" и "==="?',
        answers: [
            {
                text: 'Первый вариант может сравнивать только примитивы, но является более производительным.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Второй вариант - строгое сравнение, которое выдает false при сравнении let и const.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Первый сравнивает обьекты два раза, а второй  - три, следовательно он более точен.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'В строгом сравнении - === - проверяется также тип переменных, а не только их значение.',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 8,
    },
    {
        question: 'Какой аргумент setTimeout() принимает первым?',
        answers: [
            {
                text: 'Время через которое нужно выполнить заданную функцию.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Условие при котором запускается таймер.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Объект Date, который указывает когда должен запуститься таймер.',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Функцию, которая должна быть выполненна когда таймер закончится.',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 9,
    },
    {
        question: 'Какой из этих циклов предназначен для работы с массивами?',
        answers: [
            {
                text: 'for - in',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'for - from',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'for - every',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'for - of',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 10,
    },
    {
        question: 'Какой метод используется для построения цепочки промисов?',
        answers: [
            {
                text: '.after()',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: '.onResolve()',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: '.andNow()',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: '.then()',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 11,
    },
    {
        question: 'В каком из вариантов правильно прописан тернарный оператор?',
        answers: [
            {
                text: 'fruit.type = (fruit.color === "green") => "apple" : "banana";',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'fruit.type = (fruit.color === "green") = "apple" or "banana";',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'fruit.type = if (fruit.color === "green") {"apple"} else {"banana"};',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'fruit.type = (fruit.color === "green") ? "apple" : "banana";',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 12,
    },
    {
        question: 'Какое значение будет у переменной - "let a;" - если его не присвоить?',
        answers: [
            {
                text: 'null',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'Object.variable',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'unnownVariable',
                isCorrect: false,
                index: Math.random(),
            },
            {
                text: 'undefined',
                isCorrect: true,
                index: Math.random(),
            },
        ],
        index: 13,
    },
];

for (const question of questionsJS) {
    question.index = Math.floor(Math.random() * 100);
};

export default questionsJS.sort((a, b) => {
    if (a.index > b.index) {return 1};
    if (a.index === b.index) {return 0};
    if (a.index < b.index) {return -1};
}).slice(0, 10);