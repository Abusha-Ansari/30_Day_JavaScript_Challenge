// A-1
// function outer(){
//     let a = "hello i am variable from outer function";
//     function inner(){
//         let b = "hello i am variable from inner function"
//         console.log(b);
//         console.log(a);
//     }
//     return inner();
// }

// outer();

// function test(){
//     let counter = 0;
//     return {
//         add: function (){
//             counter +=1;
//             console.log(counter);
//         },
//         sub: function (){
//             counter-=1;
//             console.log(counter);
//         }
//     }
// }

// const counter = test();
// counter.add()
// counter.add()
// counter.add()

// counter.sub()

// A-2
// function randNumber(){
//     let randomNumber = Math.floor(Math.random()*10000);
//     return{
//         generateRandom: function(){
//             randomNumber += 1; 
//             console.log(randomNumber);
//         }
//     }
// }

// let x = randNumber();
// x.generateRandom();
// x.generateRandom();
// x.generateRandom();
// x.generateRandom();
// x.generateRandom();

// function person(name){
//     let personName = name;
//     return{
//         greet: function (){
//             console.log(`hello ${personName}`);
//         }
//     }
// }
// let abu = person("abu");
// abu.greet();


// A-3
// const one = function one(){
//     console.log("one");
// }
// const two = function two(){
//     console.log("two");
// }
// const three = function three(){
//     console.log("three");
// }

// const array = [one,two,three];
// console.log(array.indexOf(one));

// A-4
// function module(){
//     let items = [];
//     return{
//         add:function (item){
//             items.push(item)
//         },
//         remove:function (item){
//             items = items.filter((x)=>x!=item);
//         },
//         display:function (){
//             console.log(items);
//         }
//     }
    
// }

// let x = module();
// x.add("apple");
// x.add("banana");
// x.add("kiwi")
// x.display()
// x.remove("kiwi")
// x.display();

// A-5
// const memoizedFact = () => {
//     let cache = {};
//     return function fact(n) {
//         if (n in cache) {
//             console.log(`Fetching ${n} from cache`);
//             return cache[n];
//         }
//         if (n === 0) {
//             return 1;
//         }
//         console.log(`Calculating ${n}`);
//         let result = n * fact(n - 1);
//         cache[n] = result;
//         return result;
//     };
// };

// const fact = memoizedFact();

// console.log(fact(5)); 
// console.log(fact(5)); 
// console.log(fact(6)); 




