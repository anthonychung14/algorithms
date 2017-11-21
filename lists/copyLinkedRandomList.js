var RandomListNode = function(label, random){
  this.label = label;
  this.next = null;
  this.random;
}

var testHead = new RandomListNode(1);
testHead.next = new RandomListNode(2);
testHead.next.next = new RandomListNode(3);

testHead.random = testHead.next.next;
testHead.next.random = testHead;
testHead.next.next.random = testHead.next;


/*

Algorithim overview:

Make three passes over linked list
1. Insert a copy inbetween each one, without random pointers

2. Pass through again and this time assign random pointers to the copy

3. Extract the "even" linked list from the "odd"

*/

function copyLLRandom(head) {  
  
  var currNode = head;
  var next;
  var copyNode, copyPointer, copy;

  //Insert a copy of the node in between each original
  while(currNode !== null) {
    next = currNode.next;
    copyNode = new RandomListNode(currNode.label);
    currNode.next = copyNode;
    copyNode.next = next;
    currNode = next;
  }

  //Assign random pointers as you iterate through
  currNode = head;
  while(currNode !== null) {
    if (currNode.random !== null) {
      //you go to random.next to make sure you're pointing to the random's copy
      currNode.next.random = currNode.random.next;
    }
    currNode = currNode.next.next;
  }

  //Extract starting from head
  currNode = head;
  
  //Placeholder so we can reference our new head
  copyHead = new Node(0);

  copyPointer = copyHead;
  copy = copyHead;

  
  while (currNode !== null) {
    //preserve reference to the next node
    next = currNode.next.next;

    //node that we want to copy
    copy = currNode.next;
    
    //make copy assignment
    copyPointer.next = copy;
    
    //move copyPointer
    copyPointer = copy;

    //restore the original connection
    currNode.next = next;
    
    //move originalNodePointer
    currNode = next;
  }

  copyHead = copyHead.next;
  return copyHead;
}

console.log(copyLLRandom(testHead))
