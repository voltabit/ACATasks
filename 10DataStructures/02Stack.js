class Stack {
  #storage = [];
  push(data) {
    this.#storage.push(data);
  }
  pop() {
    return this.#storage.pop();
  }
  top() {
    return this.#storage[this.getSize() - 1];
  }
  isEmpty() {
    return this.getSize() === 0;
  }
  getSize() {
    return this.#storage.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1

/*
. Using a Linked List:
Create a class named Stack.
Initialize a variable (top) to represent the top of the stack as null and a size counter.
Implement the push, pop, peek, isEmpty, and getSize methods using a linked list.
Test the stack by pushing and popping elements.
Example Usage:

const stack = new Stack();
*/
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
