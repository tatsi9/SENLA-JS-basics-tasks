/* КОД ДЛЯ ЗАДАНИЯ:
 <html>
  <head></head>
  <body>
    <div>
      <p>Текст</p>
      <p>Другой</p>
      <p>Следующий</p>
      <p>Последний</p>
    </div>
    <div></div>
    <div></div>
  </body>
</html>

ЗАДАНИЯ:
Получить и вывести в консоль:*/

// 1) head;
let head;

head = document.getElementsByTagName("head"); 
// console.log (head);          // HTMLCollection [head]

head = document.head;
// console.log (head);

// или
head = document.documentElement.firstElementChild;
// console.log (head); 

// или
head = document.body.previousElementSibling; 
// console.log (head);




// 2) body;

let bodyByTag;
bodyByTag = document.getElementsByTagName("body"); 
// console.log (body);    // HTMLCollection [body] 0: body     length: 1

let body;
body = document.body; 
// console.log (body);            // <body>...</body>

//или
body = document.documentElement.lastElementChild;
// console.log(body);              // <body>...</body>

// или
body = document.head.nextElementSibling; 
// console.log(body);                // <body>...</body>



// 3) все дочерние элементы body;


let bodyChildren = document.body.children;
// console.log(bodyChildren); // HTMLCollection(4) [div, div, div, script] 

// document.body.firstElementChild; //- первый
// document.body.children[1];       // - второй
// document.body.lastElementChild;  // - третий



// 4) первый div и все его дочерние узлы:


// первый див;
let firstDiv = document.body.firstElementChild; 

// его дочерние узлы;
let firstDivChildNodes = document.body.firstElementChild.childNodes;

// console.log (firstDiv, firstDivChildNodes);     //=> <div>...</div>      NodeList(9) [text, p, text, p, text, p, text, p, text]

// или
firstDiv = document.body.children[0]; 
// console.log (firstDiv);     //=> <div>...</div>

// или 
firstDiv = document.body.childNodes[1];
// console.log (firstDiv);     //=> <div>...</div>


firstDiv = document.querySelectorAll('body > div:first-child');
// console.log (firstDiv[0]);     //=> <div>...</div>

// или
firstDiv = document.querySelector('div');
// console.log (firstDiv);   //=> <div>...</div>

// 4.1 - вывести все дочерние узлы в консоль;
// его дочерние узлы: 
firstDivChildNodes = document.body.firstElementChild.childNodes;
//console.log(firstDivChildNodes );

// дочерние элементы:
let firstDivChildren = document.body.firstElementChild.children;
// console.log(firstDivChildren);


// 4.2 - вывести все дочерние узлы/элементы в консоль кроме первого:

// узлы кроме первого:
for (let i = 1; i < firstDivChildNodes.length; i++) {
// console.log( document.body.childNodes[i])
} 

// элементы кроме первого:
for (let i = 1; i < firstDivChildren.length; i++) {
// console.log( firstDivChildren[i])
  } 






