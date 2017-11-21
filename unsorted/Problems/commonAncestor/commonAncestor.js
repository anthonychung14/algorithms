
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  var grandma = new Tree();
  var mom = new Tree();
  grandma.addChild(mom);
  var me = new Tree();
  mom.addChild(me);
  grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child)
    child.parent = this;
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(node1) {
  /*
    Approach 1: Bottom up traversal. Not possible since children don't seem to have parent property
      
      Base case: if node.parent === null, return null

      Recursive case: 

        1. Push the parent to the nodeParent Array
        2. Check if they share a common value in the parentArray
        3. Otherwise, run the same function again, but with the node.parent

    Apprach 2: Starting from node:

        1. If child is descendant of tree, common ancestor is "this"

        2. How do we travel up in the tree?

        3. Mom.children = [son, brother]

        for (var i = 0; i < this.children.length; i++) {
          node1Parent.push(this)
          this.push(this)
        }
  */
  var node1Parent = [];
  var node2Parent = [];

  var intersect = function(arr1, arr2) {
    var i, j;
    var arr1Length = arr1.length;
    var arr2Length = arr2.length;

    for (i = 0; i < arr1Length; i++) {
        for (j = 0; j < arr2Length; j++) {
            if (arr1[i] === arr2[j]) {
                return arr1[i];
            }
        }
    }
    else return false;
  }
  var node2 = this

  var subRoutine = function(node1, node2) {  
    //if traversal is complete up the tree
    if (node1.parent === null || node2.parent === null) {
      return null

    //if node2 is parent ancestor or other way around
    } else if (node1.parent === node2 || node2.parent === node1) {
      return node2;

    //recursive case is keeping track of parents, so at the first intersection, we return the value
    } else if (intersect(node1Parent, node2Parent)) {
      return intersect(node1Parent, node2Parent)        
    
    //push the parent of each node to an array. call the same function with the parent
    } else {
      node1Parent.push(node1.parent)
      node2Parent.push(node2.parent)
      subRoutine(node1.parent, node2.parent)
    }
  }

  subRoutine(node1, tNode2)

}

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(/*...*/
){
  // TODO: implement me!
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
