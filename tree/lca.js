function getLCA(node, a, b) {
    if (node === null) return null;

    if (node === a || node === b) return node;

    const left = getLCA(node.left, a, b);
    const right = getLCA(node.right, a, b);

    if (left !== null && right !== null) return node

    if (left === null) return right
    return left;
};