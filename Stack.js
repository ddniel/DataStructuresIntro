// Create a class called Stack. It should have a method to push, pop and peek

class Stack {
  constructor() {
    this.items = [];
  }

  // Method to push an item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Method to pop an item off the stack
  pop() {
    if (this.items.length === 0) {
      throw new Error("Stack underflow");
    }
    return this.items.pop();
  }

  // Method to peek at the top item without removing it
  peek() {
    if (this.items.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack);
