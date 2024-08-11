//A-1

// function check(x){
//     if(x%2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(check(10))

// function square(x){
//     return x*x;
// }
// console.log(square(2));

//A-2

// function max(a,b){
//     return (a>b)? a:b;
// }
// console.log(max(6,5));

// function concat(a,b){
//     return a+b;
// }
// console.log(concat("abu","sha"));

// A-3

// const sum = ()=>{
//     console.log(3+4);
// }
// sum();

// const isCharPresent = (word,letter) => {
//     if (word.includes(letter)){
//         console.log("Present")
//     }
//     else{
//         console.log("Absent");
//     }
// }
// isCharPresent("abusha" , "x");

//A-4

// function prod(a,b=3){
//     return a*b;
// }
// console.log(prod(2));

// function details(name,age=18){
//     return `Hello ${name} Good Morning your age is: ${age}`;
// }
// console.log(details("Abusha"));

//A-5

// function fun1(funName,x){
//     for(let i=1 ; i<=x ; i++){
//         funName();
//     }
// }
// function fun2(){
//     console.log("Hi");
// }
// fun1(fun2,5)

// function fun1(){
//     console.log("hi");
// }

// function fun2(){
//     console.log(`hello`);
// }
// function fun(ff,sf,value){
//     for(let i=1;i<=value;i++){
//         ff(sf());
//     }
// }
// fun(fun1,fun2,5)