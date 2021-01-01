class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      this.size++;
    }
  }

  // Validate index
  validateIndex(index) {
    index = Number(index);
    if (isNaN(index) || index < 0 || (index > 0 && index > this.size)) {
      return undefined;
    }
    return index;
  }

  // Insert node at nth index: node will be at nth index after insert
  insertAt(data, index) {
    index = this.validateIndex(index);
    // Whether index is a number or is out of range
    if (!index) return;

    // First index
    if (index === 0) return this.insertFirst(data);
    // Last index
    if (index === this.size) return this.insertLast(data);

    let current, previous;
    // Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before nth index
      current = current.next; // Node at nth index
      count++;
    }
    // Add
    previous.next = new Node(data, current);
    this.size++;
  }

  // Get node at nth index
  getNode(index) {
    index = this.validateIndex(index);
    // Whether index is a number or is out of range
    if (!index) return;

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  // Remove node at nth index
  removeNode(index) {
    index = this.validateIndex(index);
    // Whether index is a number or is out of range
    if (!index) return;
    if (this.size === 1) return this.clear();

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current; // Node before nth index
        current = current.next; // Node at nth index
        count++;
      }
      // remove "current" by moving the pointer to current.next
      previous.next = current.next;
    }
    this.size--;
  }

  // Clear list
  clear() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  DataInList() {
    let current = this.head;
    let dataList = [];

    while (current) {
      dataList.push(current.data);
      current = current.next;
    }
    return dataList;
  }
}

module.exports = {
  Node,
  LinkedList,
};
