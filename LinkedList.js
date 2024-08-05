// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Method to append a node at the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Method to insert a node at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }

      newNode.next = current;
      previous.next = newNode;

      if (index === this.length) {
        this.tail = newNode;
      }
    }

    this.length++;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list);
list.insertAt(4, 2);
console.log(JSON.stringify(list));
