
'use strict'
var _ = require('underscore')

const colors = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]

function findColor(str) {
  
  var firstLetter = str[0]  
  var workingIndex
  
  var result = []
  
  var cutColors = colors.filter(function(e) {
      return _.contains(e, str[0])    
  })
  //context is important with characters        
    for (var i = 0; i < cutColors.length; i++) {          
      workingIndex = cutColors[i].indexOf(str[0])      
      // test => whether or not there's room leftover in the string for the rest of the characters            
      for (var j = 1; j< str.length; j++) {
        //does the current letter that I'm looking at
        if (cutColors[i].indexOf(str[j], workingIndex) === -1 ) {                                        
          workingIndex = -1
          break;
        }        
        workingIndex = cutColors[i].indexOf(str[j], workingIndex)
      }      
      if (workingIndex > -1) {result.push(cutColors[i])}
  }
  
  return result
}

console.log(findColor('uqi')) 
//fuzzy search as letters are contained within word, but not necessarily contiguous

// [ 'darkturquoise', 'mediumaquamarine', 'mediumturquoise', 'paleturquoise', 'turquoise' ]

console.log(findColor('zre'))
// [ 'azure' ]

console.log(findColor('gold'))
// [ 'darkgoldenrod', 'gold', 'goldenrod', 'lightgoldenrodyellow', 'palegoldenrod' ]
