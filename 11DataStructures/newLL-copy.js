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
    this.length = 0;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(data) {
    let newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.length) {
      this.append(data);
      return;
    }

    let newNode = new Node(data);

    let prevNode = this.getNodeAt(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      let data = this.head.data;
      this.head = this.head.next;

      if (this.isEmpty()) {
        this.tail = null;
      }

      this.length--;

      return data;
    }

    let prevNode = this.getNodeAt(index - 1);
    let currNode = prevNode.next;

    let data = currNode.data;

    prevNode.next = currNode.next;

    if (index === this.length - 1) {
      this.tail = prevNode;
    }

    this.length--;

    return data;
  }

  remove(data) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.data === data) {
      return this.removeAt(0);
    }

    let prevNode = null;
    let currNode = this.head;

    while (currNode !== null) {
      if (currNode.data === data) {
        break;
      }

      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      return null;
    }

    let data = currNode.data;

    prevNode.next = currNode.next;

    if (currNode === this.tail) {
      this.tail = prevNode;
    }

    this.length--;

    return data;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  getNodeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    let currNode = this.head;
    let count = 0;

    while (count < index) {
      currNode = currNode.next;
      count++;
    }

    return currNode;
  }
}
