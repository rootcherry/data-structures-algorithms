class Stack {
    constructor(){
      this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }

    printArray() {
        for (let i = 0; i < this.array.length; i++){
            console.log(this.array);
        }
    }
}

const myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack);
myStack.peek();
myStack.pop()
// myStack.pop()
// myStack.pop()
console.log(myStack);
myStack.printArray();
