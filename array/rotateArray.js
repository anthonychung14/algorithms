/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can,
there are at least 3 different ways to solve this problem.

*/

// 1. slice and concat from the pivot point
const array1 = [1,2,3,4,5,6,7];
const kVal1 = 10;

const rotateNaively = (array, k) =>
    array.slice(k + 1).concat(array.slice(0, k + 1));

// this rotates each element forward one at a time.
const rotateSlightlyBetter = (array, k) => {
    let temp;
    let previous;
    for (let i = 0; i < k; i++) {
        // store the end of the array as previous
        previous = array[array.length - 1];

        // begin looping from back to front
        for (let j = 0; j < array.length; j++) {
            // store temp
            temp = array[j];
            // current is now previous
            array[j] = previous;
            // store previous back into temp
            previous = temp;
        }
    }
    return array;
}

const rotateReversal = (array, k) => {

    // reverse contents of an array with two pointers
    const reverse = (arr, left, right) => {
        while (left < end) {
            const temp = arr[left];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--
        }
    }

    k = k % array.length
    reverse(array, 0, array.length - 1);
    reverse(array, 0, k - 1);
    reverse(array, k, array.length - 1);
}

// const rotateMagically = (array, k) => {
//     const reverse = (str, left, right) {
//         const
//     }
// }
//

/*
We can directly place every number of the array at its required correct position.
But if we do that, we will destroy the original element.
Thus, we need to store the number being replaced in a temp variable.
Then, we can place the replaced number(temp) at its correct position and so on,
n times, where n is the length of array.

We have chosen n to be the number of replacements
since we have to shift all the elements of the array(which is n).
But, there could be a problem with this method,
if n where k=k(since a value of kk larger than nn eventually leads to a kk equivalent to kk). In this case, while picking up numbers to be placed at the correct position, we will eventually reach the number from which we originally started. Thus, in such a case, when we hit the original number's index again, we start the same process with the number following it.
*/

const rotateCyclically = (arr, k) => {
    // basically, if k is a really big number, we know it's going to repeatedly
    // place elements in the same place
    k = k % arr.length;

    let count = 0;
    // why do we stop when count < arr.length?
    for (let start = 0; count < arr.length; start++) {
        let current = start;

        // item to be moved
        let prev = arr[start];
        do {
            // modolo lets us loop around the array
             const next = (current + k) % arr.length;
             const temp = arr[next];
             arr[next] = prev;
             prev = temp;
             current = next;
             count++
        } while (start !== current)
    }

    return arr
}

// console.log(rotateNaively(array1, kVal1), 'naive');
// console.log(rotateSlightlyBetter(array1, kVal1), 'slow');
// console.log(rotateWithSpace(array1, kVal1), 'with space');
console.log(rotateCyclically(array1, kVal1), 'with space');

/*
if n where k = k
(since a value of kk larger than nn eventually leads to a kk equivalent to kk)
*/
