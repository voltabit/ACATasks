// Define a node class
class Node {
  constructor(data, next = null) {
    this.data = data; // The data stored in the node
    this.next = next; // The pointer to the next node
  }
}

// Define a linked list class
class LinkedList {
  constructor() {
    this.head = null; // The head of the list
    this.tail = null; // The tail of the list
    this.length = 0; // The length of the list
  }

  // Append a new node at the end of the list
  append(data) {
    // Create a new node with the given data
    let newNode = new Node(data);

    // If the list is empty, set the head and tail to the new node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the next pointer of the tail to the new node and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // Increment the length of the list
    this.length++;
  }

  // Prepend a new node at the beginning of the list
  prepend(data) {
    // Create a new node with the given data
    let newNode = new Node(data);

    // If the list is empty, set the head and tail to the new node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the next pointer of the new node to the head and update the head
      newNode.next = this.head;
      this.head = newNode;
    }

    // Increment the length of the list
    this.length++;
  }

  // Insert a new node at a specified index in the list
  insert(index, data) {
    // Check if the index is valid
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }

    // If the index is zero, prepend a new node
    if (index === 0) {
      this.prepend(data);
      return;
    }

    // If the index is equal to the length, append a new node
    if (index === this.length) {
      this.append(data);
      return;
    }

    // Create a new node with the given data
    let newNode = new Node(data);

    // Find the previous and next nodes at the index
    let prevNode = this.getNodeAt(index - 1);
    let nextNode = prevNode.next;

    // Set the next pointer of the previous node to the new node and set the next pointer of the new node to the next node
    prevNode.next = newNode;
    newNode.next = nextNode;

    // Increment   the length   of   the list
    this.length++;
  }

  // Remove   the node   at   a specified index   in   the list and return its data
  removeAt(index) {
    // Check if   the index is valid
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    // If   the index is zero, remove   the head   of   the list
    if (index === 0) {
      let data = this.head.data; // Store   the data   of   the head node
      this.head = this.head.next; // Update   the head pointer

      // If   the list becomes empty, set   the tail to null as well
      if (this.isEmpty()) {
        this.tail = null;
      }

      // Decrement   the length   of   the list
      this.length--;

      // Return   the data   of   the removed node
      return data;
    }

    // Find   the previous and current nodes at   the index
    let prevNode = this.getNodeAt(index - 1);
    let currNode = prevNode.next;

    // Store   the data   of   the current node
    let data = currNode.data;

    // Set   the next pointer of   the previous node to   the next node of   the current node
    prevNode.next = currNode.next;

    // If   the index is equal to   the length - 1, update   the tail pointer
    if (index === this.length - 1) {
      this.tail = prevNode;
    }

    // Decrement   the length   of   the list
    this.length--;

    // Return   the data   of   the removed node
    return data;
  }

  // Remove   the first node that matches   the given data in   the list and return its data
  remove(data) {
    // If   the list is empty, return null
    if (this.isEmpty()) {
      return null;
    }

    // If   the head node matches   the data, remove it and return its data
    if (this.head.data === data) {
      return this.removeAt(0);
    }

    // Find   the previous and current nodes that match   the data
    let prevNode = null;
    let currNode = this.head;

    while (currNode !== null) {
      // If   a match is found, break out of the loop
      if (currNode.data === data) {
        break;
      }

      // Otherwise, move to the next node
      prevNode = currNode;
      currNode = currNode.next;
    }

    // If no match is found, return null
    if (currNode === null) {
      return null;
    }

    // Store the data of the current node
    let data = currNode.data;

    // Set the next pointer of the previous node to the next node of the current node
    prevNode.next = currNode.next;

    // If the current node is the tail, update the tail pointer
    if (currNode === this.tail) {
      this.tail = prevNode;
    }

    // Decrement the length of the list
    this.length--;

    // Return the data of the removed node
    return data;
  }

  // Return the number of nodes in the list
  size() {
    return this.length;
  }

  // Return true if the list is empty, false otherwise
  isEmpty() {
    return this.length === 0;
  }

  // Helper method to get the node at a specified index in the list
  getNodeAt(index) {
    // Check if the index is valid
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    // Start from the head and traverse the list until the index is reached
    let currNode = this.head;
    let count = 0;

    while (count < index) {
      currNode = currNode.next;
      count++;
    }

    // Return the node at the index
    return currNode;
  }
}
