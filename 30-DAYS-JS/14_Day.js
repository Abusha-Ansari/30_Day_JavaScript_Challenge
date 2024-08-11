// A-1
// class person{
//     constructor(username,age,gender){
//         this.username = username;
//         this.age = age;
//         this.gender = gender;
//     }
//     details = ()=>{
//         console.log(`hello ${this.username}`);
//     }
//     updatedDetails = ()=>{
//         this.username = "NoUserName"
//     }
    
// }
// const person1 = new person("abu",20,"male");
// person1.details();

// const person2 = new person("abusha",20,"male")
// person2.updatedDetails();
// console.log(person2.username);

// A-2

// class person{
//     constructor(name){
//         this.name = name;
//     }
// }

// class student extends person{
//     constructor(name,age,sex){
//         super(name);
//         this.age = age;
//         this.sex = sex;
//     }

//     greet(id) {
//         return `hello ${this.name} your id is ${id}`
//     }
// }

// const personName = new person("abusha")
// const newPerson = new student("abusha",20,"male")
// console.log(newPerson.name);
// console.log(newPerson.greet(101));

// A-3
// class person{
//     static totalStudent = 0;

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         person.totalStudent += 1;
//     }
//     greet(){
//         console.log(`hello ${this.name}, person: ${person.totalStudent}`);
//     }
    
// }

// const p1 = new person("abu",10)
// const p2 = new person("dak",10)
// const p3 = new person("sid",10)

// p1.greet();
// p2.greet();
// p3.greet();

// A-4
// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(newName){
//         const [fname,lname] = newName.split(' ')
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//   }
  
//   const person = new Person("abusha", "ansari");
//   console.log(person.fullName);

//   person.fullName = "Abujaid Ansari"
//   console.log(person.fullName);
 
// A-5

// class Person {
//     #balance = 0; 
  
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
  
//     set fullName(newName) {
//       const [firstName, lastName] = newName.split(' ');
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
    
//     addBalance(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//       } else {
//         console.error("Amount must be positive to add to balance.");
//       }
//     }

//     removeBalance(amount) {
//       if (amount > 0) {
//         if (this.#balance >= amount) {
//           this.#balance -= amount;
//         } else {
//           console.error("Insufficient balance.");
//         }
//       } else {
//         console.error("Amount must be positive to remove from balance.");
//       }
//     }
  
    
//     getBalance() {
//       return this.#balance;
//     }
//   }
  

//   const person = new Person("John", "Doe");
  
  
//   console.log(person.fullName); 
  

//   person.fullName = "Jane Smith";
  
  
//   console.log(person.fullName);
  

//   person.addBalance(100);
//   console.log(person.getBalance()); 
  

//   person.removeBalance(50);
//   console.log(person.getBalance());
  
//   person.removeBalance(100);
  
//   console.log(person.getBalance()); 
  