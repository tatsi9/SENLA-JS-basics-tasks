// Придумать название для переменных, которые описывают (let, const)

// const firstName = 'Ivan'; // имя (постоянное)
// const lastName;           // фамилия (постоянное)
// let age;                  // возраст (может изменяться)
// let addInfo;              // информация о пользователе ( может изменяться)


// Что будет в консоли и почему:

// 1
//console.log(test);
//var test = 'string';

//ОТВЕТ: => undefined или string ???? ;
//т.к. обращение к переменной var происходит до ее объявления, но т.к. область ее видимости - весь файл,- браузер находит ее значение и выводит);


//2
// var x = 'string';
// var x = 'string 2';
// console.log(x);

//ОТВЕТ: => string 2 ;
//т.к. в консоль выводится значение переменной после ее переопределения;


//3

// console.log(test);
// let test = 'string';
//ОТВЕТ: => error; 
//т.к.  обращение к переменной let происходит до ее объявления и не попадает в "область в видимости");


// var x = 'string';
// var x = 'string 2';
// console.log(x);
//ОТВЕТ: => error;
// Т.к. переменную var нельзя переопределять;
//  SyntaxError: Identifier 'x' has already been declared

//5
// let num = 12;
// let num = 1;
//ОТВЕТ: => 1 Uncaught SyntaxError: Identifier 'num' has already been declared
//повторение ключевого слова 'let' приводит к ошибке. Переменная может быть объявлена только один раз.





