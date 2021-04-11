// 1 Создать функцию multiply, которая будет принимать любое количество чисел 
//и возвращать их произведение: multiply(1,2,3) = 6. 
//Если нет ни одного аргумента вернуть ноль.

/*function multiply () {
    let x = 1;
    if(arguments.length == 0) return 0;
    for (let i = 0; i < arguments.length; i++)  x *= arguments[i];
    return x;
}
multiply ();

console.log(multiply(2, 5, 1));*/


// 2 ?
/*С помощью рекурсии вычислить факториал числа 10.
function factorial (num) {
    while (num > 0) {
    return (num * factorial(num - 1));
     }
    }
    console.log(factorial (10));*/


    //3 Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.
/*
    let str = 'test';
    function strReverse(str) {
        return str.split('').reverse().join('');
    }
   // console.log(strReverse ('test'));
*/
    // 4 Написать функцию, которая проверяет является ли слово палиндромом

    /*function isPalindrome (str) {
        let strReverse = str.split('').reverse().join('');
        if (strReverse == str) {
            return 'yes';
        } else {
            return 'no';
        }
    }
    */
    // учитывать ли заглавные буквы? учитывать пробелы?
    //console.log(isPalindrome ('искатьтакси'))
    //= yes

    // 5 Создать функцию, которая в качестве аргумента принимает строку из букв 
    // и возвращает строку, где каждый символ разделен пробелом и заменён 
    // на значение символа из юникода. ((hello) => "104 101 108 108 111")


//     function unicode (str) {

//     //     let i;
//     //    for  (i = 0; i <= str.length - 1) {
//          return  str.split(' ');
//        }
//     }
// console.log(unicode('hello'));

// let str= 'hello';

// newStr = str.split('');

// newStr = newStr.charAt(2);

// console.log(newStr);

// 6 Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'
// ЧЕРЕЗ ЦИКЛ


let str = 'test';
// let i = 0;
// while (i <= str.length-1) {
// sym = str[i];
// console.log(sym);
// i++;
// }

function UUU(str) {
    
    console.log(str[0]);
    str = str.substr(1);
    console.log(str[0]);
}

UUU('test');


// 7 Создать две функции и дать им осмысленные названия:

// первая функция принимает массив и callback, возвращая строку из обработанного массива.
//вторая функция (callback) обрабатывает каждый элемент массива