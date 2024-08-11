// A-1
// const Mypromise = new Promise((resolve)=>{
//     setTimeout(() => {
//        resolve('')
//     }, 2000);
// })

// Mypromise.then(()=>{
//     console.log("no hello");
// })

// const Mypromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        reject(new Error("sorry error found"))
//     }, 2000);
// })

// Mypromise.catch((error)=>{
//     console.log(error.message);
// })


// A-2
// function fetchData (message,time){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(message);
//         },time);
//     })
// }

// fetchData("fetching data 1",2000)

// .then((message)=>{
//     console.log(message);
//     return fetchData("fetching data 2",2000)
// })

// .then((message)=>{
//     console.log(message);
//     return fetchData("fetching data 3",2000)
// })

// .then((message)=>{
//     console.log(message);
// })

// .catch((error)=>{
//     console.error(error);
// })


// A-3

// function fetchData(message,time){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(message);
//         }, time);
//     });
// }

// async function logTheRes(){
//     try{
//         const msg = await fetchData("this is a message",2000)
//         console.log(msg);
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// logTheRes();

// function fetchData(message,time){
//     return new Promise((reject)=>{
//         setTimeout(() => {
//             reject(new Error("rejected"));
//         }, time);
//     });
// }

// async function logTheRes(){
//     try{
//         const msg = await fetchData("this is a message",2000)
//         console.log(msg);
//     }
//     catch(error){
//         console.error(error.message)
//     }
// }
// logTheRes();


// A-4

// fetch('https://fakestoreapi.com/products')
//     .then((res)=>(res.json()))
//     .then((json)=>{console.log(json)})


    // fetch('https://fakestoreapi.com/products')
    // .then(res=>res.json())
    // .then(json=>console.log(json))


// async function fetchData(){
//     try{
//         const response = await fetch('https://fakestoreapi.com/products')
//         if(!response.ok){
//             throw new Error('error found in fetch')
//         }
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error)
//     }
// }

// fetchData();

// A-5
// const urls = [
//     'https://fakestoreapi.com/products',
//     'https://fakestoreapi.com/carts',
//     'https://fakestoreapi.com/users'
// ];

// async function fetchDataFromUrls(urls) {
//     try {
   
//       const promises = urls.map(url => fetch(url).then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       }));
  
     
//       const results = await Promise.all(promises);
  
//       console.log(results);
//     } catch (error) {

//       console.error('Error fetching data:', error);
//     }
//   }

//   fetchDataFromUrls(urls)


// async function fetchDataFromUrls(urls) {
//     try {

//       const promises = urls.map(url => fetch(url).then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       }));
  

//       const firstResolved = await Promise.race(promises);
  
 
//       console.log(firstResolved);
//     } catch (error) {

//       console.error('Error fetching data:', error);
//     }
//   }
  

//   const urls = [
//     'https://fakestoreapi.com/products',
//     'https://fakestoreapi.com/carts',
//     'https://fakestoreapi.com/users'
//   ];
  

//   fetchDataFromUrls(urls);


reject