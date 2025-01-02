const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class ListNode {
    constructor(x) {
     this.value = x;
     this.next = null;
   }
  }


class Queue {

  constructor(){
    this.elements = [];
  }

  getUnderlyingList() {
    if (!this.elements) return {};
    const head = new ListNode(this.elements[0]);
    let temp = head;
    for (let i = 1; i < this.elements.length; i++){
      temp.next = new ListNode(this.elements[i]);
      temp = temp.next;
    }
    return head;
  }

  enqueue(value) {
    this.elements.push(value);
    return this;
  }

  dequeue() {
    console.log(this.elements, "deq");
    if (!this.elements) return 1;
    const val = this.elements.shift();
    return val;
  }
}



module.exports = {
  Queue
};
