const dictionary = {
  BOB: true,
  TOM: true,
  YO: true,
};

const boggleBoard = [
  ['Z', 'T', 'O'],
  ['B', 'O', 'Y'],
  ['O', 'B', 'M'],
];

function isWord(str) {
  // returns true/false if word in dictionary
}

function solveBoggle() {
  // sequence of adjacent characters
}

for (let key in dict) {
  let branch = trie;
  for (let i = 0; i < key.length; i++) {
	let char = key.charAt(i);
	branch[char] = branch[char] || {};
	branch = branch[char];

	if (i === key.length - 1) {
	  branch['_end'] = true;
	}
  }
}

function boggle(dict, board) {
	let words = [];
	let trie
}

Find the kth largest number in an array
[4, 7, 2, 8, 1, 6, 9], 3 => 7

[1, 7, 2, 8, 4, 6, 9]
// randomIndex
// pointer1
// pointer2

// sort and iterate K times (n log n)
// need to look at every item
// ? -> transform into BST (log n)

// quick select (n)
	// take a random index from the length
// iterate from 0 (bIndx)
	// if item at randIdx < bIndx
		// switch them


// partially max heapify (of k size)
// partially min heap (of k size)
	// add 4 to heap
	// add 7 to heap
	// add 2 to heap (2 is at the top)
	// add 8. compare current 8 to top of heap.

	// pop from heap k times

class Heap {
	add O(log n)
	peek O(1)
	pop O(1)
	size O(1)
}

[9, 4, 2, 7, 8, 1, 6]
output -> [9,8,7];

function findKthLargest(arr, k) {
	const minHeap = new Heap();

	for (let i = 0; i < arr.length; i++) {
	const curr = arr[i];
	if (minHeap.size < k) {
minHeap.add(curr);
} else if (minHeap.peek() < curr) {
minHeap.pop();
minHeap.add(curr);
}
}
return minHeap.pop()
}

/*

Given a dictionary, a method to do lookup in dictionary and a M x N board where every cell has one character. Find all possible words that can be formed by a sequence of adjacent characters. Note that we can move to any of 8 adjacent characters, but a word should not have multiple instances of same cell.

Input: ;

Output:  Following words of dictionary are present
         BOOK
         QUIZ

*/
var dictionary = {"BOOK": true, "FOR": true, "QUIZ": true, "GO": true, "BOO": true, "OP": true};
var board = [['B','I','Z'], ['P','O,','K'], ['Q','S','O']];

// [0,1], [1,1],

function boggle(dict, board) {
  let words = [];
  let trie = {};

  function search(i, j, trie, word) {
    console.log(i, j, trie, word);
    if (trie['_end']) {
      words.push(word);
    }
    for (let n = Math.max(0, i - 1); n <= Math.min(i + 1, board.length - 1); n++) {
      for (let m = Math.max(0, j - 1); m <= Math.min(j + 1, board[n].length - 1); m++) {
        let char = board[n][m];
        if (n === i && m === j) {
          continue;
        }
        console.log(char, trie[char]);
        if (trie[char]) {
          search(n, m, trie[char], word + char);
        }
      }
    }
  }

  for (let key in dict) {
    let branch = trie;
    for (let i = 0; i < key.length; i++) {
      let char = key.charAt(i);
      branch[char] = branch[char] || {};
      branch = branch[char];

      if (i === key.length - 1) {
        branch['_end'] = true;
      }
    }
  }

  for (let j = 0; j < board.length; j++) {
    for (let k = 0; k < board.length; k++) {
      let char = board[j][k];
      if (trie[char]) {
        search(j, k, trie[char], char);
      }
    }
  }
  return words;
}

console.log(boggle(dictionary, board));
