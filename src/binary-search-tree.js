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
    return !!this.search(data, this.rootOfTree);
  }

  search(data, tempRoot){
    if (!tempRoot) return null;
    
    if (data === tempRoot.data) return tempRoot;
    if(data > tempRoot.data) return this.search(data, tempRoot.right);    
    return this.search(data, tempRoot.left);
  }

  find(data) {
    return this.search(data, this.rootOfTree);
  }

  remove(data) {
    this.rootOfTree = this.removeNode(this.rootOfTree, data);
  }

  removeNode(tempNode, data){
    if(!tempNode) return null;

    if (data < tempNode.data) {
      tempNode.left = this.removeNode(tempNode.left, data);
      return tempNode;
    }

    if (data > tempNode.data){
      tempNode.right = this.removeNode(tempNode.right, data);
      return tempNode;
    } 

    if (data === tempNode.data){

      if (!tempNode.left || !tempNode.right){

        if(tempNode.right) tempNode = tempNode.right;
        else if (tempNode.left) tempNode = tempNode.left;
        else tempNode = null;

        return tempNode;
      }

      const temp = this.minNode(tempNode.right);
      tempNode.data = temp.data;

      tempNode.right = this.removeNode(tempNode.right, temp.data);

      return tempNode;
    }
  }

  min() {
    const result = this.minNode(this.rootOfTree);
    return result.data;
  }

  minNode(tempNode){
    if (!tempNode.left) return tempNode;
    return this.minNode(tempNode.left);
  }

  max() {
    const result = this.maxNode(this.rootOfTree);
    return result.data;
  }

  maxNode(tempNode){
    if (!tempNode.right) return tempNode;
    return this.maxNode(tempNode.right);
  }
}

module.exports = {
  BinarySearchTree
};