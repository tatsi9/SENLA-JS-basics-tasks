// // 1) Записать в коротком виде:

// //let a = a + 5; 
// let a;
// a += 5;

// // let b = b * 15;
// let b;
// b *= 15;

// // let c = c - 3;
// let c;
// c -= 3;

// // let d = d % 2;
// let d;
// d %= 2;

// // let k = a + k;
// let k;
// k =+ a ; //???

// // let l = l * b;
// let l;
// l *= b ;

// // let m = m * 3 * k;
// let m = 2, 
// k = 3;
// m *= 3 * k ;



// 2) Возвести переменную в куб, используя краткую запись.
let q = 3;
q **= 3;

//console.log (q);                          //=> 27;



// 3) Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. 

let letter;
letter = 'маленький';

if (letter === 'маленький') {
    letter = 'большой';
} else {
    letter = 'маленький';
}
// console.log(letter);             //=>   большой


// Сделать тоже самое, используя тернарный оператор:

let result;
result = 'маленький';

result = (result === "маленький") ? "большой" : "маленький"; 

// console.log(result);                //=>    большой


// 4) Записать условие, используя условный оператор if: 
//если переменная меньше нуля: присвоить ей строку “меньше нуля” 
//если переменная равна нулю: присвоить 1 
//если больше нуля: используя краткую запись, умножить переменную на 10.
//Сделать тоже самое, используя тернарный оператор.

let n = 2;
if (n < 0) {
    n = "меньше нуля" 
} else if (n === 0) {
    n = 1
} else {
    n *= 10
};
// console.log(n);                             // => 20; 

 let p = 2;
 let reslt = (p < 0) ? "меньше нуля" : (p === 0) ? p = 1 : p *= 10;

 // console.log (reslt);                      // => 20; 
 


// 5) Используя конструктор switch, записать следующее условие:
// if(a == 'котик') {
//   console.log('котик');
// } else if(a == 'собака') {
//   console.log('собака');
// } else if(a == 'хомячок') {
//   console.log('хомячок');
// } else {
//   console.log('неизвестное науке животное');
// }
// Важно: в консоли вы должны увидеть только одно условие из 4х.


let a = 'чупакабра';
//a = 'хомячок';

switch (a) {
    case 'котик':  
        console.log('котик');
        break;
    case 'собака': 
        console.log('собака');
        break;
    case 'хомячок':
        console.log('хомячок');
        break;
    default: 
        console.log('неизвестное науке животное');
}


// 6) Чему равен x в каждом из примеров, объясните почему:

// let x = 0 || 'строка'; => true
//=> х = 'строка';  - 0 относится к "falsy" значениям;


// let x = 1 && 'строка'; => true
//=> х = 'строка'; - оба значения - true, возвращает последнее;


// let x = null || 1; => true
//=> х = 1; - первое значение соответствует false => переходим к следующему => 1 == true => возвращает true;


// let x = null && 1; => false
//=> х = null; - null - это false, на нем вычисление останавливается и возвращает исходное значение первого операнда;


// let x = 1 && null; => false;
//=> х = null;


// let x = null || 0 || 1; => true
//=> х = 1, т.к. первые 2 операнда вычисляются как false, значит возвращается последний (true);


// let x = null && 0 && 1; => false;
//=> х = null, возвращает значение первого операнда (false);



// 7) Чему равен x в каждом из примеров, объясните почему:

// let x = 1 + 2 + '3';          //=> х = 33; 

//   1) 1 + 2 = 3 (сначала выполняется сложение первых операндов-чисел и возвращается 3); 
//   2) 3 + '3' = '3' + '3' = 33 - при сложении полученной суммы со строкой - первый операнд преобразуется в строку и происходит конкатенация строк;



// let x = 1 + 2 - '1';          //=> х = 2;    

//  1)  1 + 2 = 3 - сначала выполняется сложение первых операндов-чисел и возвращается 3; 
//  2) 3 - '1' = 2; при вычитании строка '1' преобразуется в число 1 и вычитается из результата первой операции; 
//  3) результат - число 2;



// let x = '1' + 2 - 1;          //=> х = 11;

//  1) '1' + 2 = '1' + '2' = '12'; - второй операнд преобразуется в строку и происходит конкатенация строк;
//  2) '12' - 1 = 12 - 1 = 11; - строка '12' при вычитании преобразуется в число 12;


// let x = true + 1;            //=> х = 2;

//   true + 1 = 1 + 1 = 2; - логическое значение true при сложении с числом преобразуется в число 1;



// let x = +'1' + 2;            //=> х = 3;

// +'1' + 2 = 1 + 2 = 3; - оператор унарный "+" преобразует строку '1' в число 1;



// let x = null + 2;            //=> х = 2;

//   null + 2 = 0 + 2 = 2; - null при сложении с числом преобразуется в число 0;




// let x = undefined + 2;      //=> х = NaN;

//  undefined + 2 = NaN + 2 = NaN; undefined при сложении с числом преобразуется в NaN; любая операция с NaN возвращает NaN;




// let x = true + undefined;   //=> х = NaN;

//  true + undefined = 1 + NaN = NaN; - true в присутствии бинарного '+' преобразуется в число 1, а undefined при сложении с числом преобразуется в NaN; любая операция с NaN возвращает NaN;