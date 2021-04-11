
let string = 'string test example';
let newString;


// 1) Получить первую и последнюю букву строки:

newString = string[0];
//console.log(newString);                   //=> s;

//или
newString = string.charAt(0);

//console.log(newString);                   //=> s;

newString = string[string.length - 1];

//console.log(newString);                   //=> e;

newString = `${string[0]}, ${string[string.length - 1]}`;

//console.log(newString);                  //=> s, e;


// 2) Сделать первую и последнюю буквы в верхнем регистре:

//newString = string[0].toUpperCase();
//console.log(newString);                 //=> S;

//newString = string[string.length - 1].toUpperCase();
//console.log(newString);                 //=> E;

//newString = 'string test example'.toUpperCase();
//=> STRING TEST EXAMPLE;

newString = `${string[0].toUpperCase()}${string.slice(1,string.length - 1)}${string[string.length - 1].toUpperCase()}`;

//console.log(newString);                 //=> String test examplE;


// 3 Найти положение слова string в строке:

newString = string.indexOf('string');

//console.log(newString);                 //=> 0;


// 4 Найти положение второго пробела:

newstring = string.indexOf(' ', string.indexOf(' ') + 1);

newString = string.indexOf(' ', 7);
newString = string.lastIndexOf(' ');
newString = string.lastIndexOf(' ', 12);

//console.log(newString);                 //=> 11;


// 5 Получить строку со 2-ого символа длинной 6 букв

newString = string.substr(1, 6); 

//console.log(newString);               //=> tring (6 символов, включая пробел);


// 6 Получить строку с 1 по 7 символ:

newString = string.slice(0, 8);

//console.log(newString);               //=> string t;


// 7 Получить из двух переменных типа number x = 20, y = 21 получить строку '2021':

let x = 20,
    y = 21;
newString = `${x}` + `${y}`;
newString = x.toString() + y.toString();

//console.log(newString);               //=> 2021;