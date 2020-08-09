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
    if (!this.head) {
      return null;
    }
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    else if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;

    while (node.next.next) {
      node = node.next;
    }

    node.next = null;
  }

  getAt(n) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === n) {
        return node;
      }
      counter++
      node = node.next;
    }

    return null;
  }

  removeAt(n) {
    let previous;
    let node = this.head;
    let counter = 0;

    if (!this.head) {
      return;
    }

    if (n === 0) {
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
    let previous;
    let counter = 1;
    let node = this.head;
    let newNode;

    if (n === 0) {
      newNode = new Node(data, this.head.next);
      this.head = newNode;
      return;
    }

    while (node) {
      if (counter === n) {
        newNode = new Node(data, node);
        previous.next = newNode;
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
