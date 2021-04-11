// 1
// Используя функцию, найти последний элемент массива, не изменяя его.

let lastItem = (arr) => arr[arr.length - 1];

let arr = ['ручка', 'карандаш', 'тетрадь', 'учебник', 'линейка'];

// console.log(lastItem(arr));           //=> линейка;



// 2
// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

let double = (arr) => arr.concat(arr);

// console.log(double([1, 3, 6]));            //=> (6) [1, 3, 6, 1, 3, 6];




// 3
// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.

function createArr(n) {
    let arr = [];
    
    for (let i = 1; i <= n; i++) {
    arr = arr.concat(i);
    }
    return arr;
 }

// console.log(createArr(10));         // => (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 4
// Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"


function delete1stElement() {
    for (let i = 0; i <= arguments.length - 1; i++) {
      arguments[i].splice(0, 1);
    }
  }
  
  let letters = ["a", "b", "c"];
  let numbers = [1, 2, 3, 4];
  let words = ["apple", "banana", "orange"];
  
  delete1stElement(letters, numbers, words)
  
//   console.log(letters, numbers, words);      //=> (2) ['b', 'c'] (3) [2, 3, 4] (2) ['banana', 'orange']



// 5   !!! ё
// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

function toAlphabetReversed (string) {
    return string.split('').sort().reverse().join('');
}

let string1 = "екважбигёзд";
// console.log (toAlphabetReversed(string1));       //=> "кизжёедгвба";

// 6 
// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.

function sortArr(arr) {
    return arr.reverse();
}

let arr1 = [5, 2, -1, 6, 9, -9, 3];
// console.log(sortArr(arr1));    //=> (7) [3, -9, 9, 6, -1, 2, 5];



//7 
// Создать функцию, которая принимает 3 аргумента: любой произвольный массив, начальный номер элемента в массиве, конечный номер.

//8 
// Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.

//9 
// Удвоить элементы массива, не используя циклы.


// 10
// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

//console.log (arr); => (3) [1, 4, 5];

//11
// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'три', 'четыре');
// console.log (arr);               //=> (5) [1, 'три', 'четыре', 4, 5];



//11a* Удалить из массива [1, 2, 3, 4, 5] третий (элемент с индексом 2) и четвертый (элемент с индексом 3) элементы и на их место вставить “три” и “четыре” соответственно.
  
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2, 'три', 'четыре');
// console.log (arr);       //=> (5) [1, 2, 'три', 'четыре', 5];

//12
//Вставить в произвольный массив любое значение после второго элемента.

let arr = ['apple', 'pear', 'banana', 'lemon'];
arr.splice(2, 0, 'orange');
// console.log(arr);             //=>(5) ['apple', 'pear', 'orange', 'banana', 'lemon'];



//********************** */
//12a ? (через функцию)
// let arr = ['apple', 'pear', 'banana', 'lemon'];
// let value;
// function insertAfter2nd (arr, value) {
//    return  arr.splice(2, 0, `${value}`);
// }
// value = 'orange';
// console.log(insertAfter2nd (['apple', 'pear', 'banana', 'lemon'], 'orange'));
//=> 


//*************************** */

//13 Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"

//14 Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},
//]

//15 Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ]
//Например, filterServices(services, 20, 60).
