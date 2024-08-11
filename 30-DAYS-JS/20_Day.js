// A-1
// localStorage.setItem("name","abusha")
// console.log(localStorage.getItem("name"));
// localStorage.clear();



// const obj1 = {
//     name:"abusha",
//     age:19,
//     sex:"MALE"
// }
// localStorage.setItem("test",JSON.stringify(obj1));
// const data = localStorage.getItem("test");
// console.log(JSON.parse(data));

// A-2
// function storeData(){
//     localStorage.clear()
//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     localStorage.setItem("dataName" , JSON.stringify(name.value))
//     localStorage.setItem("dataEmail" , JSON.stringify(email.value))
// }
// let btn = document.getElementById("btn")

// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     storeData();
// })


// for(let i = 0; i< localStorage.length; i++ ){
//     console.log(localStorage.key(i))
//     console.log(localStorage.getItem(localStorage.key(i)))
    
// }

// localStorage.removeItem("dataEmail");

// for(let i = 0; i< localStorage.length; i++ ){
//     console.log(localStorage.key(i))
//     console.log(localStorage.getItem(localStorage.key(i)))
    
// }


// A-3
// function saveToSession(key,value){
//     sessionStorage.setItem(key,value)
// }

// saveToSession("name","abusha")
// saveToSession("name1","ansari")

// const newData = {
//     name:"abusha",
//     age:20,
//     sex:"male",
//     profession:"student"
// }
// sessionStorage.setItem("test" , JSON.stringify(newData));
// const data = sessionStorage.getItem("test")
// console.log(JSON.parse(data));

// A-4
// function storeData(){
//     sessionStorage.clear()
//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     sessionStorage.setItem("dataName" , JSON.stringify(name.value))
//     sessionStorage.setItem("dataEmail" , JSON.stringify(email.value))
//     document.getElementById("display").innerText = sessionStorage.getItem("dataName") + sessionStorage.getItem("dataEmail")
// }
// let btn = document.getElementById("btn")

// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     storeData();

// })



// for(let i = 0; i< sessionStorage.length; i++ ){
//     console.log(sessionStorage.key(i))
//     console.log(sessionStorage.getItem(sessionStorage.key(i)))
// }

// sessionStorage.removeItem("dataEmail");

// for(let i = 0; i< sessionStorage.length; i++ ){
//     console.log(sessionStorage.key(i))
//     console.log(sessionStorage.getItem(sessionStorage.key(i)))
    
// }

// A-5
// function local(key,value){
//     localStorage.setItem(key,value)
//     console.log(localStorage.getItem(key));
// }

// function session(key,value){
//     sessionStorage.setItem(key,value);
//     console.log(sessionStorage.getItem(key));
// }

// function MAIN(key,value){
//     local(key,value);
//     session(key,value);
// }

// MAIN("name" , "abusha");

// function clearStorage(){
//     sessionStorage.clear();
//     localStorage.clear();

//     if(sessionStorage.length == 0 && localStorage.length == 0){
//         console.log("both the storages are empty");
//     }
// }
// clearStorage()


