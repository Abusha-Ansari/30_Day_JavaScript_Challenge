// A-1
// A-2

class stack {
    constructor(){
        this.items = [];
    }


push(element){
    this.items.push(element)
}

pop() {

    if(this.isEmpty()){
        return "stack is empty";
    }

    return this.items.pop();
}

peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

isEmpty() {
    return this.items.length === 0;
  }

size() {
    return this.items.length;
  }


printStack() {
    return this.items.toString();
  }

}
let stack1 = new stack();

// stack1.push(10)
// stack1.push(100)
// stack1.push(1000)
// stack1.push(10000)
// console.log(stack1.printStack());
// console.log(stack1.peek());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.printStack());



// let str = "abusha";
// let arr = str.split('');
// let newStr = "";
// arr.map((x)=>{
//     stack1.push(x)
// })
// while(!stack1.isEmpty()){
//  newStr += stack1.pop();
// }
// console.log(newStr);

// A-3

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    printQueue() {
      return this.items.toString();
    }
  }
let newQueue = new Queue();

newQueue.enqueue(10)
newQueue.enqueue(100)
newQueue.enqueue(1000)

console.log(newQueue.printQueue());
console.log(newQueue.dequeue());
console.log(newQueue.front());

// A-4
// A-5