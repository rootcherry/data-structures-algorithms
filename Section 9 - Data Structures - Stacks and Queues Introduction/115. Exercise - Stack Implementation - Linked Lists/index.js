class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    peek() {
        // return this.top;
        console.log(this.top.value);
    }

    push(value){
        const node = new Node(value);

        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const holdingPointer = this.top; // referência do 1st item
            this.top = node;
            this.top.next = holdingPointer; 
        }
        this.length++;  
        return this;    
    }
    
    pop(){
        if (!this.top) { // if doesn't exist
            return null;
        }

        if (this.length === 0) { // this.top === this.bottom -> 1 item on the list
            this.bottom = null
        }

        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }

    //isEmpty

    printList() {
        const arr = [];
        let currNode = this.top;
        while (currNode != null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(arr);
    }
  }
  
const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack);
myStack.printList();
myStack.peek();
myStack.pop();
console.log(myStack);
myStack.printList();
