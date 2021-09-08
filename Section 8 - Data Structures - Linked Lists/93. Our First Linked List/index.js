// 1 --> 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // Code here
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    // 1 --> 10 --> *99 --> 5 --> 16 (2, 99)
    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }
        const node = new Node(value);
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next;
        leader.next = node;
        node.next = holdingPointer;
        this.length++;
        return this.printList();    
    }

    remove(index) {

    }

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        // return array;
        console.log(array);
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
// 1 --> 10 --> *99 --> 5 --> 16 (2, 99)
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.printList();
// console.log(myLinkedList);
