let num;

// 1) Получить число Pi из Math и округлить его до двух знаков после точки

num = Number(Math.PI.toFixed(2));                  
// console.log(num);                               //=> 3.14


// 2) Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1

num = Math.max(10, 17, 5, 12, 15, 99, 1);           
// console.log(num);                               //=> 99;

num = Math.min(10, 17, 5, 12, 15, 99, 1);           
// console.log(num);                               //=> 1;


// 3) С помощью Math.random:

// 3.1) Получить случайное число и округлить его до двух цифр после запятой:

num = Math.random();
num = +num.toFixed(2);
// console.log(num);                                //=> случайное число; (например, 0.29)

// или

num = Math.floor(Math.random() * 100) / 100;
// console.log(num);                                //=> случайное число (например, 0.54)

// 3.2) Получить случайное число от 0 до Х:

// НЕ ВКЛЮЧАЯ х:
function getRandom(min, max) {
    return num = Math.random() * (max - min) + min;     
}
    let x = 10;
    getRandom(0, x) 
// console.log(num);                                 //=> случайное число (напр., 0.47070763380628655)


// НЕ ВКЛЮЧАЯ х; ЦЕЛОЕ:
function getRandomInteger(min, max) {
return num = Math.floor(Math.random() * (max - min) + min); 
}
x = 12;
getRandomInteger(0, x)  
// console.log(num);                                 // => 4, 2, 9, ...

// ВКЛЮЧАЯ Х; ЦЕЛОЕ:
function getRandomInteger(min, max) {
     return num = Math.floor(Math.random() * (max - min + 1) ) + min;
}
     x = 10;
    getRandomInteger(0, x)
    // console.log(num);                               //=> 3, 5, 10, ...



//4) Получить число из строки '100$' 

num = parseInt('100$');                                   
//console.log(num);                                    //=> 100;