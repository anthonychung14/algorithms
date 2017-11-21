class Node {
    constructor(num) {
        this.val = num;
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null;
    }

    getHead() {
        return this.head;
    }
}


function intersectionLinkedList(list1, list2) {

    // Assumption is that these can even intersect
    var len1 = 0;
    var runner1;
    while (node1 !== null) {
        len1++
        runner1 = node1.next
    };

    var len2 = 0;
    var runner2;
    while (node2 !== null) {
        len2++
        runner2 = node2.next
    };

    // Check if their endpoints are the same
    if (runner1 !== runner2) return null;

    // if 1 is longer than the other catch it up by calculating diff
    if (len1 > len2) {
        runner1 = list1.getHead();
        runner2 = list2.getHead();
        diff = len1 - len2;

    } else {
        runner1 = list2.getHead();
        runner2 = list1.getHead();
        diff = len2 - len1;
    }

    // move them up together
    while (runner1 !== runner2) {
        runner1 = runner1.getNext()
        runner2 = runner2.getNext()
    }

    return runner1;
}