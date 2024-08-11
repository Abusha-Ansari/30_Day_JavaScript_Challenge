// A-1
// try{
//     const num = 100
//     const div = '0'
//     const ans = (num*div);
//     console.log(a);


// }
// catch(error){
//     console.log("error found")
//     console.log(error.message);
// }

// function divide(a,b){
//     if(b==0){
//         throw new Error('error ');
//     }
//     else{
//         return a/b;
//     }
// }

// try{
//     divide(2,0)
// }
// catch(error){
//     console.log('error found in function call')
// }
// finally{
//     console.log("call done");
// }

// A-2

// try{
// console.log("this is try");
// }
// catch(error){
// console.log("this is catch");
// }
// finally{
// console.log("this is finally");
// }

// A-3

// class DivisionByZeroError extends Error {
//     constructor(message, numerator) {
//         super(message);
//         this.name = 'DivisionByZeroError';
//         this.numerator = numerator;
//     }

//     getErrorMessage() {
//         return `${this.name}: ${this.message} (numerator: ${this.numerator})`;
//     }
// }

// function divide(a, b) {
//     if (b === 0) {
//         throw new DivisionByZeroError('Cannot divide by zero', a);
//     } else {
//         return a / b;
//     }
// }

// try {
//     divide(2, 0);
// } catch (error) {
//     if (error instanceof DivisionByZeroError) {
//         console.log(error.getErrorMessage());
//     } else {
//         console.log('Error:', error.message);
//     }
// } finally {
//     console.log("Call done");
// }


// var a="";
// function validate(a){
//     if(a.length == 0){
//         throw new Error('this is empty')
//     }
//     else{
//         return "not empty"
//     }
// }
// try{
//     console.log(validate(a));
// }catch(error){
//     console.log(error.message);
// }

// A-4

// const testPromise
//  = 
// new Promise((resolve,reject)=>{
//     reject(new Error('there is error'))
// })
// .catch((error)=>{
//     console.log(error);
// })

// async function data(){
//     try{
//         const data = await new Promise((resolve,reject)=>{
            
//             reject(new Error('mai nahi dunga')) 
//             // resolve(0)
//         })
//         console.log(data);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }

// data()

// A-5

// try{
//     const data = fetch('https://fakestoreap.com/products')
//     data.then(data=>data.json()).then(json=>console.log(json)).catch((error)=>{console.log("error foud 1");})

// }
// catch(error){
//     console.log("error found");
// }

// async function fetchData1(){
//     try{
//         const response = await fetch('https://fakestoreapi.com/products')

//         if(!response.ok){
//             throw new Error('there was error while fetching data')
//         }
//         const data = await response.json();
//         console.log(data);

//     }catch(error){
//         console.log(error);
//     }
// }
// fetchData1()