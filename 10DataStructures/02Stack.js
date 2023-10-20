class Stack {
  #items = [];
  push(value) {
    this.#items.push(value);
  }
  pop() {
    return this.#items.pop();
  }
  top() {
    return this.#items[this.#items.length - 1];
  }
  isEmpty() {
    return !this.#items.length;
  }
  getSize() {
    return this.#items.length;
  }
}

function isValidParenthesis(str) {
  const stack = new Stack();
  str.split("").forEach((el) => {
    if (el === "(" || el === "[" || el === "{") {
      stack.push(el);
    } else if (
      (el === ")" && stack.top() === "(") ||
      (el === "]" && stack.top() === "[") ||
      (el === "}" && stack.top() === "{")
    ) {
      stack.pop();
    } else if (stack.isEmpty()) {
      return false;
    }
  });
  return stack.isEmpty();
}

console.log(isValidParenthesis("[]([{}]))))"));
