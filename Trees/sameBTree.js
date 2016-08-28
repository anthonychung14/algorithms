/*
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal 
if they are structurally identical and the nodes 
have the same value.

*/


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null; 
}

var p = new TreeNode(1)
var q = new TreeNode(1)

q.left = new TreeNode(2)
p.left = new TreeNode(2)

var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    return p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right);
};

console.log(isSameTree(p,q))