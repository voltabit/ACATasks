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
      this.tail = this.current;
    } else {
      this.tail.next = this.current;
      this.tail = this.current;
    }
    this.size++;
  }
  prepend(data) {
    this.current = new Node(data);
    if (this.isEmpty()) {
      this.head = this.current;
      this.tail = this.current;
    } else {
      this.current.next = this.head;
      this.head = this.current;
    }
    this.size++;
  }
  insert(data, index) {
    if (index > this.size) {
      throw new RangeError("Invalid index");
    }
    this.current = new Node(data);
    this.pointer = this.head;
    this.count = 0;
    while (this.count < index - 1) {
      this.pointer = this.pointer.next;
      this.count++;
    }
    if (index === 0) {
      this.prepend(data);
    } else if (index === this.size - 1) {
      this.append(data);
    } else {
      this.current.next = this.pointer.next;
      this.pointer.next = this.current;
      this.size++;
    }
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
  remove(data) {
    this.pointer = this.head;
    this.count = 0;
    if (this.pointer.data === data) {
      this.head = this.head.next;
      this.size--;
    } else {
      while (this.count < this.size - 1) {
        if (this.pointer.next.data === data) {
          if (this.count === this.size - 2) {
            this.pointer.next = null;
            this.tail = this.pointer;
            this.size--;
            break;
          } else {
            this.pointer.next = this.pointer.next.next;
            this.size--;
            break;
          }
        }
        this.pointer = this.pointer.next;
        this.count++;
      }
    }
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

const myLL = new LinkedList();
myLL.append(3);
myLL.append(6);
myLL.append(9);
myLL.prepend(2);
myLL.insert(4, 0);
myLL.insert(5, 3);
myLL.removeAt(5); // remove from [ 4, 2, 3, 5, 6, 9 ]
myLL.remove(6); // remove from [ 4, 2, 3, 5, 6 ]
console.log(myLL.getSize());
console.log(myLL.printList());
