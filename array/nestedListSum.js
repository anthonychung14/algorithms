// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.
// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

[1,2,3,[4,5, [2,3,5]]]

function nestedList(list) {

  //RECURSIVE + STATE+1 ON EACH RECURSE
  function helper(nestList, depth) {
    if (nestList.length === 0 || nestList === null) { return 0 }
    var sum = 0;

    for (var i = 0; i < nestList.length; i++) {
      if (typeof nestList[i] === 'Number') {
        sum += nestList[i] * depth
      } else {
        sum += helper(nestList[i], depth+1)
      }
    }
    return sum;
  }
  return helper(list, 1)
}
