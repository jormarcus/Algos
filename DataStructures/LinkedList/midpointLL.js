function getLinkedListMidPoint(list) {
  let slow = list.head;
  let fast = this.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next; // moves through twice as fast so slow will only be halfway
  }

  return slow;
}