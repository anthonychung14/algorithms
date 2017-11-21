function MinHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}

// This function works just fine and shouldn't be modified
MinHeap.prototype.getRoot = function () {
  return this._heap[0];
}

MinHeap.prototype = function () {

  bubbleUp: function(index) {
    var parentIndex;
    while(true) {
      if (index%2 === 1) {
        parentIndex = (index-1)/2
      } else if (index%2 === 0) {
        parentIndex = (index-2)/2
      }
      this.swap(parentIndex, index)
      childIndex = parentIndex
      if (this.storage[parentIndex] < this.storage[index]) {break;}
    }
  },

  return {
    pop,
    size,
    insert,
    remove,
    pop,
    bubbleUp,
    bubbleDown
  }
}


MinHeap.prototype.insert = function (value) {
  // TODO: Your code here

  //push onto the end of an array
    //add node to end of heap
  this._heap.push(value)
  var indexInsert = this._heap.indexOf(value)
  var parentIndex = Math.floor( (indexInsert - 1) / 2 )
    //locate node's parent =>

    //while node has parent and is less than parent

      //swap node and parent

  var switchValues = function(child, parent, heap) {
    if (!parent) {
       return heap;
    } else if (parent < child) {
      return heap;
    } else {
      var tweenChi = child;
      heap[indexInsert] = heap[parentIndex]
      heap[parentIndex] = tweenChi
      switchValues(heap[indexInsert], heap[parentIndex], heap);
    }
  }

  switchValues(this._heap[indexInsert], this._heap[parentIndex], this._heap)
}

MinHeap.prototype.removeRoot = function () {
  // TODO: Your code here
  // swap the youngest child with the root
  originalroot = this heap pop
  temp root index = 0

  //remove last node and store it to be returned later

  //locate children nodes
var lesserChild index = get lesserchildindex(temproot index, this)
  whiel lesserChidlIndex && this compare(this head lesserchild, this heap temp root index
    swapNodes between lesserchild index and temp root indx and this)
  temp root reset to lesserchild

  lesserchild = getletterchild
  //evaluate the root heap. Swap with the smallest of the children

  //Check the swapped node against its children


}
