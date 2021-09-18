class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        // return this.first;
        console.log(this.first);
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) return null;

        if (this.isEmpty()) this.last = null;

        const pointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    printList() {
        const arr = [];
        let currNode = this.first;
        while (currNode != null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(arr);
    }
}

const myQueue = new Queue();

// myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue);
myQueue.printList();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
myQueue.printList(); 
