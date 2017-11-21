/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
ABCDE
BCDENULL
 * * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over

 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 
ABCDEBCDEBCDEB
ACECE


 * Example code:
 *
 var nodeA = Node('A');
 var nodeB = nodeA.next = Node('B');
 var nodeC = nodeB.next = Node('C');
 var nodeD = nodeC.next = Node('D');
 var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value){
  return { value: value, next: null };
}

var hasCycle = function(linkedList){
  var solved = false
  var answer = false

  var tortoise = function(node) {
    return node.next
  }
  var hare = function(node) {
    step = node.next;
    return step.next;
  }

  var hareNode = hare(linkedList)
  var torNode = tortoise(linkedList)
  while (!solved) {
  
    //if you get to the end of a linkedList, no cycle
    if (hareNode.next === null) {
      solved = true;
      return answer;

    //if cycle is created, exit while loop and return a true
    } else if (hareNode === torNode) {
      solved = true;
      answer = true;
      return answer;

    //iterative case: I need to update the values of hare and tortoise

    } else {
      hareNode = hare(hareNode);
      torNode = tortoise(torNode);
    }
  }
};
