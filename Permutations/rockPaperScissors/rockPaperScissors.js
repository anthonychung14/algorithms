/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
/*Overview

1. This is a recursion application
2. I know this because this look a lot like a tree
3. Each 'Node' of RPS has RPS as children.

Global Variables
1. Big array that returns the whole answer
2. Small array that represents each possible scenario
3. Array of possibilities (R, P, S)

Recursive Call
1. Each function call will push the element into an array
2. Call the Function again

Base Case
1. The base case will be when no more children are reached. 
2. Return the larger array

*/

var rockPaperScissors = function (gameLength) {
  var RPS = ["rock", "paper", "scissors"]
  var results = [];
  //Helper function for recursion
  //Should have 3 for game since there are 3 possible choices to throw
  var treeMake = function(gameLength, smallResult) {     
    if (gameLength === 0) {
      results.push(smallResult);
      return;
    } 
    for (var i = 0; i < RPS.length; i++) {     
      treeMake(gameLength-1, smallResult.concat(RPS[i]))
      }
    }
  treeMake(gameLength, [])
  return results;
}

rockPaperScissors(3)



