// A-1---------------------------------------------------

// var book = {
//     title:"my book",
//     author:"abusha",
//     year:2024
// }
// console.log(book);
// console.log(book.title);
// console.log(book.author);

// A-2------------------------------------------------

// var book = {
//     title:"my book",
//     author:"abusha",
//     year:2024,
//     detail:function(){
//         return `The book name is ${this.title} and ${this.author} is the author` 
//     }
// }
// console.log(book.detail());

// var book = {
//     title:"my book",
//     author:"abusha",
//     yearPublish:2000,
//     year:function(year){
//         this.yearPublish = year; 
//     }
// }
// book.year(2020)
// console.log(book.yearPublish);

// A-3---------------------------------------------------

// let Lib = [
//     {
//         title:"my book 1",
//         author:"me 1"
//     },
//     {
//         title:"my book 2",
//         author:"me 2"
//     },
//     {
//         title:"my book 3",
//         author:"me 3"
//     }
// ]
// console.log(Lib);
// Lib.forEach(x=>console.log(`${x.title} and ${x.author}`))

// A-4---------------------------------------------------

// var book = {
//     title:"my book",
//     author:"abusha",
//     year:2024,
//     detail:function(){
//         return `The book name is ${this.title} and ${this.author} is the author` 
//     }
// }
// console.log(book.detail());

// A-5---------------------------------------------------

// var book = {
//     title:"my book",
//     author:"abusha",
//     year:2024
// }

// for (const key in book) {
//     if (book.hasOwnProperty.call(book, key)) {
//         const element = book[key];
//         console.log(element);
//     }
// }

// console.log(Object.keys(book));
// console.log(Object.values(book));