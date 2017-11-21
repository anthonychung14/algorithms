var graph = require('./graphProjectClass.js')
var Graph = graph.Graph

var testGraph = new Graph(['a','b','c','d','e','f','g'], [['b', 'f'], ['c', 'f'], ['a', 'c'], ['a', 'b'], ['a','f'], ['e', 'b'], ['g', 'd'], ['e','a'], ['h','b']])

function topologicalSort(graph) {
  var zeroDepends, currZero, currChild, depChildren, taskOrder = [];

  //while the build order is not complete
  while(taskOrder.length <= graph.projectNum) {

    //iterate over everything with zero dependencies
    zeroDepends = graph.getZeroDepends();

    for (var i = 0; i < zeroDepends.length; i++) {

      //Assign vars
      currZero = zeroDepends[i]   //either node f or d
      depChildren = currZero.dependArray  //[g] and then [b,c,a]

      //Add to result
      taskOrder.push(currZero.name)

      //State management: decrement, remove from node's hash of depends,
      for (var j = 0; j < depChildren.length; j++) {
        currChild = graph.projectHash[depChildren[j]]
        currChild.decDependNum(currZero.name)
      }

      //State management: decrement from graph class
      delete graph.projectHash[currZero.name]
    }
  }
  return taskOrder;
}

console.log(topologicalSort(testGraph))
