var Graph = function(proj, depend) {
  this.projects = []
  this.projectHash = {}
  this.projectNum = proj.length
  
  //populate with projects
  for (var i = 0; i < proj.length; i++) {
    this.getOrCreateProj(proj[i])
  }  
  var first, second
  
  //populate with dependencies
  for (var i = 0; i < depend.length; i++) {
    first = depend[i][0]
    second = depend[i][1]
    this.getOrCreateDepend(first, second)
  }  
}

Graph.prototype.getOrCreateProj = function(project) {
  var graphNode;
  if (!this.projectHash[project]) {
    graphNode = new Project(project)
    this.projects.push(graphNode)
    this.projectHash[project] = graphNode
  }
  return this.projectHash[project]
}

Graph.prototype.getOrCreateDepend = function(first, second) {
  var start = this.getOrCreateProj(first)
  var end = this.getOrCreateProj(second)    
  start.addDepend(end)
}

Graph.prototype.getZeroDepends = function() {
  var res = []
  for (var key in this.projectHash) {    
    if (this.projectHash[key].dependNum === 0) {
      res.push(this.projectHash[key])
    }
  }
  return res;
}

var Project = function(n) {
  this.name = n
  this.dependArray = []
  this.hashDepend = {}
  this.dependNum = 0
}

Project.prototype.addDepend = function(task) {  
  var name = task.name  
  if(!this.hashDepend[name]) {
    task.dependArray.push(this.name)    
    this.hashDepend[name] = task
    this.incDependNum();
  }
}

Project.prototype.getDepend = function() {
  return this.dependArray
}

Project.prototype.incDependNum = function() {
  this.dependNum += 1
}
Project.prototype.decDependNum = function(key) {
  delete this.hashDepend[key]
  this.dependNum--
}

module.exports = {
  Project,
  Graph
}
