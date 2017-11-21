var Node = function(val){
  this.val = val
  this.next = null
  this.random
}

var bob = new LinkedList()

bob.insert(1)
bob.insert(2)

/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(value){
  //fill me in!
  var list = {}
  var node = {}
  node.value = value;
  node.next = next;

  list.head = node;
  list.tail = node;

  return list

};

//write methods here!

LinkedList.prototype.addToTail = function(value){        
  var newNode = this.makeNode(value)
  if (this.head === null) {
    this.head = newNode;
  } else if (this.head.next === null) {
    this.head.next = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;

  }
};

LinkedList.prototype.removeHead = function(){
  var nextHead = this.head.next;
  delete this.head;
  this.head = nextHead;
  return this.head;
};

linkedList.prototype.contains = function(value){
  if (this.value === value) {
    return true;
  } else if (this.next === null) {
    return false;
  } else {
    this.contains(node.next)
  }

};

LinkedList.prototype.makeNode = function(value){
  var node = {
    value: value,
    next: null
  }
  return node;

};
