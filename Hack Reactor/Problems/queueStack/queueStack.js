/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  this.storage = [];
  this.stackSize = 0; 
  // add an item to the top of the stack
  this.push = function(value){
    this.storage[this.stackSize] = value
    this.stackSize++
  };

  // remove an item from the top of the stack
  this.pop = function(){
    var popped = this.storage[this.stackSize]
    for (var i = 0; i < this.stackSize-1; i++) {
      this.storage[i] = this.storage[i+1]
    }
    console.log(this.stackSize-1)
    delete this.storage[this.stackSize-1]
    this.stackSize--
    return popped
  };

  // return the number of items in the stack
  this.size = function(){
    return this.stackSize
  };
};


/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value){
    inbox.push(value)
    // TODO: implement `enqueue
    return inbox
  };


  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    if (outbox.size() < 1) {
      outbox.push(inbox.pop())
    }

  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.size() + outbox.size()

  };
};
