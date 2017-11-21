/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Draft #1
var longestConsecutive = function(root) {
    var count = 0;
    var currMax = [];

    function traverseBT(node) {
        if (!node.val) {
            const biggerThanCurr = count > currMax;
            if (biggerThanCurr) {
                currMax.push(count);
                count = 0;
            }
            return;

        }
        const leftSide = node.left - 1 === node.val;
        const rightSide = node.right - 1 === node.val;

        if (leftSide) {
            count++;
            traverseBT(node[node.left]);
        } else if (rightSide) {
            count++;
            traverseBT(node[node.right]);
        }
    }
    traverseBT(root)
    return currMax;
};

// Answer draft
var longestConsecutive = function(root) {
    return dfs(root, null, 0);
};

var dfs = function(node, parent, length) {
    if (node === null) return length;
    length = (parent !== null && node.val === parent.val + 1) ?
        length + 1 : 1;

    return Math.max(length, Math.max(
        dfs(node.left, node, length),
        dfs(node.right, node, length)
    ));
}