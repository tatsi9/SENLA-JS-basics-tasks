// 1) Создать функцию которая принимает два параметра - элемента. 
// Функция проверяет является ли первый элемент родителем для второго элемента 
// isParent(parent, child) => true || false

function isParent(parent, child) {
    return child.parentNode === parent;
}

// или
function isParent(parent, child) {
    return parent.contains(child);
}


let ul = document.querySelector('ul');
let li = document.querySelector('ul > li:first-child');

// console.log(isParent(ul, li));     // true



// 2) Найти элемент который находится перед списком ul

let ulPreviousElement = ul.previousElementSibling;

// console.log (ulPreviousElement);  // <div>...</div>


// 3) Найти параграф и получить его текстовые содержимое
 
let pInnerText = document.body.firstElementChild.firstElementChild.firstElementChild.innerHTML;
// console.log(pInnerText);          // Lorem ipsum dolor sit amet, odio omnesque ius...


let p = document.querySelector('p');
let pText = p.innerHTML;

// console.log(pText);                // Lorem ipsum dolor sit amet, odio omnesque ius...

//или 
let pTextContent = p.textContent;
// console.log(pTextContent);            // Lorem ipsum dolor sit amet, odio omnesque ius...



// 4) .....................


// 5) Найти список и добавить ему класс "list" */

let list = document.querySelector('ul');
document.querySelector('ul').classList.add('list');

// console.log(list.className);    //  list
