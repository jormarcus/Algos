class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!this.head) {
      return null;
    }

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;
    let previous = this.head;

    // check if no nodes
    if (!this.head) {
      return;
    }
    // check if only one node
    else if (!this.head.next) {
      this.head = null;
      return;
    }

    // loop through nodes and assign previous to current and current node to next
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  getAt(n) {
    let counter = 0;
    let node = this.head;

    if (n < 0) {
      return null;
    }

    while (node) {
      if (counter === n) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(n) {
    let counter = 0;
    let node = this.head;
    let previous;

    if (!this.head) {
      return;
    }

    if (n < 0) {
      return;
    } else if (n === 0) {
      this.head = this.head.next;
      return;
    }

    while (node) {
      if (counter === n) {
        previous.next = node.next;
        return;
      }
      counter++;
      previous = node;
      node = node.next;
    }

    return;
  }

  insertAt(n, data) {
    if (n === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let counter = 0;
    let node = this.head;
    let previous;

    while (node) {
      if (counter === n) {
        previous.next = new Node(data, node);
        return;
      }
      counter++;
      previous = node;
      node = node.next;
    }

    return;
  }
}

module.exports = { Node, LinkedList };
