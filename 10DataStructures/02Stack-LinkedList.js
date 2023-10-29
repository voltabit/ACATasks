class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    this.current = new Node(data);
    if (this.isEmpty()) {
      this.head = this.current;
    } else {
      this.tail.next = this.current;
    }
    this.tail = this.current;
    this.size++;
  }
  removeAt(index) {
    if (index >= this.size) {
      throw new RangeError("Invalid index");
    }
    this.pointer = this.head;
    this.count = 0;
    while (this.count < index - 1) {
      this.pointer = this.pointer.next;
      this.count++;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else if ((index = this.size - 1)) {
      this.pointer.next = null;
      this.tail = this.pointer;
    } else {
      this.pointer.next = this.pointer.next.next;
    }
    this.size--;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    if (this.size === 0) {
      return true;
    }
  }
  printList() {
    this.pointer = this.head;
    const output = [];
    for (let i = 0; i < this.size; i++) {
      output.push(this.pointer.data);
      this.pointer = this.pointer.next;
    }
    return output;
  }
}

class Stack {
  #storage = new LinkedList();
  top = null;
  size = 0;
  push(data) {
    this.#storage.append(data);
    this.top = data;
    this.size++;
  }
  pop() {
    if (this.#storage.isEmpty()) {
      throw new Error(`Stack is empty!`);
    }
    this.popped = this.#storage.tail.data;
    this.#storage.removeAt(this.size - 1);
    this.size--;
    this.current = this.#storage.head;
    for (let i = 0; i < this.size - 1; i++) {
      this.current = this.current.next;
    }
    this.#storage.tail = this.current;
    this.top = this.#storage.tail.data;
    return this.popped;
  }
  getTop() {
    return this.top;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  printStack() {
    return this.#storage.printList();
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.getTop()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1

console.log(stack.printStack());

/*
. Using a Linked List:
Create a class named Stack.
Initialize a variable (top) to represent the top of the stack as null and a size counter.
Implement the push, pop, peek, isEmpty, and getSize methods using a linked list.
Test the stack by pushing and popping elements.
Example Usage:

const stack = new Stack(); 
*/
// stack.push(1);
// stack.push(2);
// console.log(stack.pop()); // Should print 2
