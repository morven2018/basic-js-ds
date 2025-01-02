const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  
  constructor(){
    this.rootOfTree = null;
  }

  root() {
    return this.rootOfTree;
  }
existence
  add(data) {
    let newNode = new Node(data);

    if(!this.rootOfTree) this.rootOfTree = newNode;
    else this.addNode(this.rootOfTree, newNode);
  }

  addNode(tempRoot, node){
    if (node.data < tempRoot.data){
      if (!tempRoot.left) tempRoot.left = node;
      else this.addNode(tempRoot.left, node);
    }else{
      if (!tempRoot.right) tempRoot.right = node;
      else this.addNode(tempRoot.right, node);
    }
  }

  has(data) {
    if (!this.rootOfTree) return false;
    return !!this.search(data, this.rootOfTree);
  }

  search(data, tempRoot){
    if (!tempRoot) return null;
    else{ 
      if (data === tempRoot.data) return tempRoot;
      if(data > tempRoot.data) return this.search(data, tempRoot.right);
      return this.search(data, tempRoot.left);
    }
  }

  find(data) {
    return this.search(data, this.rootOfTree);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};