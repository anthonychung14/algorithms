function getElementsByClassName(className) {  
  var result = [];
  traverseDOM(document.body, result, className);
  return result;
}

function traverseDOM(node, result, className) {  
  Array.from(node.classList).forEach((classString, classIdx) => {
    if(className === classString) {
      result.push(node);     
    }    
  })
  Array.from(node.children).forEach(child => {
    traverseDOM(child);    
  })      
}

function trueRecurse(className, node){      
  var result = [];
  Array.from(node.classList).forEach((classString, classIdx) => {
    if (className === classString) {  
      result.push(node);
    }
  })    
  Array.from(node.children).forEach(child => {    
    result = result.concat(trueRecurse(className, child));    
  })            
  return result;
}