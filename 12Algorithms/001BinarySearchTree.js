class Node {
  constructor(data, left = null, right = null) {
    this.value = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    if (this.isEmpty()) {
      this.root = new Node(value);
    } else this.insertOnRoot(value, this.root);
  }
  insertOnRoot(value, newRoot) {
    if (value < newRoot.value) {
      if (!newRoot.left) {
        newRoot.left = new Node(value);
        return;
      }
      this.insertOnRoot(value, newRoot.left);
    } else if (value > newRoot.value) {
      if (!newRoot.right) {
        newRoot.right = new Node(value);
        return;
      }
      this.insertOnRoot(value, newRoot.right);
    } else {
      console.error(`${value} already exists or wrong value`);
    }
  }

  search(val, newRoot = this.root) {
    if (!newRoot) {
      return false;
    }
    if (newRoot.value === val) {
      return true;
    } else if (newRoot.value > val) {
      return this.search(val, newRoot.left);
    } else if (newRoot.value < val) {
      return this.search(val, newRoot.right);
    }
  }

  findMin(newRoot = this.root, min = this.root.value) {
    if (!newRoot) {
      return min;
    } else {
      return this.findMin(newRoot.left, newRoot.value);
    }
  }
  findMax(newRoot = this.root, max = this.root.value) {
    if (!newRoot) {
      return max;
    } else {
      return this.findMax(newRoot.right, newRoot.value);
    }
  }
}

const myBsc = new BinarySearchTree();
myBsc.insert(10);
myBsc.insert(5);
myBsc.insert(11);
myBsc.insert(1);
myBsc.insert(55);
myBsc.insert(16);
console.log(myBsc.search(17));
console.log(myBsc.findMin());
console.log(myBsc.findMax());
