  //node.x = val
  //node.l = left
  //node.r = right

function solution(root) {
    var visible = 1
    var rootVal = root.x
    if (!root.l && !root.r) {return visible}
    
    function getVal(node) {
        if (node === null) {return null}
        return node.x        
    }
    
    function DFS(node) {            
      if (node === null) { return }      
      else if (getVal(node.l) > rootVal) {                
        visible ++
      } else if (getVal(node.r) > rootVal) {        
        visible++
      }
      DFS(node.l)
      DFS(node.r)
    }

    DFS(root)
    return visible
}