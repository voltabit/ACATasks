class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class MyLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(data) {
    let current = new Node(data);
    if (this.isEmpty()) {
      this.head = current;
      this.tail = current;
    } else {
      this.tail.next = current;
      this.tail = current;
    }
    this.size++;
  }

  prepend(data) {
    let current = new Node(data);
    if (this.isEmpty()) {
      this.head = current;
      this.tail = current;
    } else {
      current.next = this.head;
      this.head = current;
    }
    this.size++;
  }

  insert(data, index) {
    if (index < 0 || index > this.size) {
      throw new error(`Wrong index`);
    }
    if (index === 0) {
      this.prepend(data);
    } else if (index === this.size + 1) {
      this.append(data);
    }
    this.size++;
  }

  removeAt(index) {}

  remove(data) {}

  getSize() {}

  isEmpty() {}
}
const ll = new MyLL();
ll.append(95);
ll.append(90);
ll.append(99);
ll.prepend(80);
console.log(ll);
