const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  let nodes = findTopList(l , k);    
  if (!nodes) return;
  let head = nodes;

  while (nodes.next.next !== null){
    while (nodes.next.value === k){
      nodes.next = nodes.next.next;
    }
    nodes = nodes.next;
    
  }

  if (nodes.next.value === k){
    nodes.next = null;
  }    
  
  return head;
}


function findTopList(l , k){
  let node = l;
  while (node.value === k) node = node.next;
  return node;
}

module.exports = {
  removeKFromList
};
