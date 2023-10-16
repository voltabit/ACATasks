class Stack {
  #items = [];
  push(val) {
    this.#items.push(val);
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

function isValidParentheses(str) {
  const stack = new Stack();

  const parenthesesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const el of str) {
    if (el === "(" || el === "{" || el === "[") {
      stack.push(el);
    } else if (el === ")" || el === "}" || el === "]") {
      if (stack.isEmpty()) {
        return false;
      }

      const top = stack.pop();
      if (parenthesesMap[top] !== el) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log(isValidParentheses("(("));
console.log(isValidParentheses("{{}}()[]"));
console.log(isValidParentheses("(){}{}"));
console.log(isValidParentheses("({})"));
console.log(isValidParentheses("({])"));
