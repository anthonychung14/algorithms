export class btreeNode {
	constructor(val) {
		this.val = val;
		this.right = null;
		this.left = null;
  	}
}

const BTree = function(value) {
    var bst = Object.create(searchMethods)
    bst.value = value;
    bst.left = null;
    bst.right = null;
    return bst
};