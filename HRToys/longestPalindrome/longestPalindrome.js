/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var global = "";


  var midpoint = Math.floor(string.length/2)
  

  var subroutine = function(midpoint) {
    var mini = "";
    if (midpoint === 0 || midpoint === string.length) {
      return;
    } else {
      for (var i = 0; i < midpoint; i++) {
        sideRight = string[midpoint + i]
        sideLeft = string[midpoint - i]
        if (sideLeft === sideRight) {
              mini = string.slice(midpoint-i, midpoint + i)
              mini > global ? global = mini : global
        }
      }
      subroutine(Math.floor(midpoint/2))
      subroutine(Math.floor(midpoint + midpoint/2))  
    }
  }
  subroutine(midpoint)
};

longestPalindrome(" racecar ")

  //binary search tree on letters
//   var BST = function(value) {
//     var BST = Object.create(searchMethod);
//     BST.value = value;
//     BST.str = string[value]
//     BST.right = null;
//     BST.left = null;
//   }

//   var searchMethod = {}; 
//   searchMethod.insert = function(val) {
//   if (val < this.value) {
//     if (this.left === null) {
//       this.left = BST(val);
//     } else {
//       this.left.insert(val);
//     }
//   } else if (val > this.value) {
//     if (this.right === null) {
//       this.right = BST(val);
//     } else {
//       this.right.insert(val);
//     }
//   } else {
//     console.log('This already contains the value')
//   }
// };

//   var makeBST = function(string) {
//     var midpoint = Math.floor(string.length/2)
//     var tree = BST(midpoint)

//     for (var i = 0; i < midpoint; i++) {
//       tree.insert(midpoint + i)
//       tree.insert(midpoint - i)
//     }
//     return tree;
//   }

//   var theBST = makeBST(string);

//   for (var i = 0; i < string.length; i++) {


//   }