class Queue {
  #storage = [];
  enqueue(element) {
    this.#storage.push(element);
  }
  dequeue() {
    return this.#storage.shift();
  }
  front() {
    return this.#storage[0];
  }
  isEmpty() {
    return this.#storage.length === 0;
  }
  size() {
    return this.#storage.length;
  }
  print() {
    console.log(...this.#storage);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // Output: 1 2 3

console.log("Front element: " + queue.front()); // Output: Front element: 1

queue.dequeue();
queue.print(); // Output: 2 3

console.log("Queue size: " + queue.size()); // Output: Queue size: 2
