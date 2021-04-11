
// 1) Создать объект с полем 'notebook' равным 'MacBook'

const item = {
    notebook: 'Macbook'
}
// console.log(item);                 //=> {notebook: 'Macbook'}


// 2) Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'

item.price = 1500;
item.currency = 'dollar';

// console.log(item);                  //=> {notebook: 'Macbook', price: 1500, currency: "dollar"}


// 3) Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами)

item.details = {
    model: 'Air',
    color: 'white'
}

// console.log(item);                    //=> {notebook: "Macbook", price: 1500, currency: "dollar", details: {…}}

/*
currency: "dollar"
details:
color: "white"
model: "Air"
__proto__: Object
notebook: "Macbook"
price: 1500
__proto__: Object
*/
