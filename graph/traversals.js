//implement graph

var testGraph = {
  'a': {
    value: 'a',
    n: ['b', 'e'],
    visited: null
  },
  'b': {
    value: 'b',
    n: ['a', 'c'],
    visited: null,
  },
  'c': {
    value: 'c',
    n: ['b','d','e'],
    visited: null
  },
  'd': {
    value: 'd',
    n: ['c', 'e'],
    visited: null
  },
  'e': {
    value: 'e',
    n: ['a' ,'c', 'd'],
    visited: null
  }
}

function DepthFirstGraph(graph) {
  var path = [];
  var hash = {}
  function dfs(node) {
    if(node.visited) {
      return;
    }
    if(!node.visited) {
        path.push(node.value)
     }
    node.visited = true;

    for (var i = 0; i<node.n.length;i++) {
      dfs(graph[node.n[i]])
    }
  }
  dfs(graph['a'])
  return path
}

function BreadthFirstGraph(graph, node) {
  var path = [];

  var q = []
  q.push(graph[node])

  while(q.length > 0) {
    var dq = q.shift();
    if (!dq.visited) {
      path.push(dq)
    }

    dq.visited = true

    for (var i = 0; i < dq.n.length; i++) {
      var neighbor = graph[dq.n[i]]
      if (neighbor.visited === null) {
        q.push(neighbor)
      }
    }
  }
  return path
}

console.log(BreadthFirstGraph(testGraph, 'a'))