var testGraph = {
  'a': {
    value: 'a',
    next: ['b', 'e'],
    visited: false
  },
  'b': {
    value: 'b',
    next: ['c', 'e'],
    visited: false,
  },
  'c': {
    value: 'c',
    next: ['d'],
    visited: false
  },
  'd': {
    value: 'd',
    next: ['e'],
    visited: false
  },
  'e': {
    value: 'e',
    next: ['c'],
    visited: false
  },
  'f': {
    value: 'f',
    next: ['d', 'e'],
    visited: false
  }
}

//solution BFS

function findRoute(graph, start, target) {
  var q = []
  var path = []
  q.push(start)

  while(q.length > 0) {
    var dq = q.shift()

    for (var i = 0; i < dq.next.length; i++) {
      var neighbor = graph[dq.next[i]]
      if (neighbor.value === target && !neighbor.visited) {
        return true;
      } else if (!neighbor.visited) {
        neighbor.visited = true
        q.push(neighbor)
        path.push(neighbor.value)
      }
    }
    dq.visited = true;
  }
  console.log("done")
  return false
}

findRoute(testGraph, testGraph['a'], 'f')

//XC - DFS solution

//implement DFS given start. if the node.value you're at equals the target, return true

//otherwise, when all are visited, you know that tis impossible, so return false