// 1) ...................

// 2) Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 2*1 или 6! = 6*5*4*3*2*1) .

//9! = 1 * 9 * (9 - 1) * (9 - 2) * (9 - 3) * (9 - 4) * (9 - 5) * (9 - 6) * (9 - 7) * (9 - 8)

function factorial (n) {
let product = 1;
while (n) {
    product *= n--;
} 
return product;
}
// console.log(factorial (9))                       //=> 362880;


//3) Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

let str = 'Просветление наступит через: ';
let n = 10; 

while (n > 0) {
    str = str + `${n}, `;
    n--;
} 
str = str.slice(0, -2);

//console.log (str);                  //=> Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1




// 4) Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.

 let i;
 for (i = 0; i <= 20; i++) {
     if (i % 2 == 0) continue;
   // console.log (i);                                        // 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
}

// 5) .............