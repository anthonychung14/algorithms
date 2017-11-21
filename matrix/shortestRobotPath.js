/*

OOP is great for being descriptive around the elements you are musing
Complaints I've read about OOP are around the gorilla/forest paradigm, around performance/flexibility as requirements inevitably change
In the context of algorithms, I think they're exceedingly useful!

Couple reasons I can hypothesize why it could also be good
- Your interviewers might be CS majors, classically trained, and possibly skeptical of your academic skills
- Using OOP to solve an algo demonstrates multiple desirable competencies
    - Break problem and results into reusable components
    - Organize your code

The whiteboard, not your mouth, is the medium through which you communicate your technical ability.

Because code. The faster you get to writing code, the higher the likelihood of you passing.
This, of course, assumes you aren't a rude asshat, but a charming lad/lass that they'd enjoy working with

*/
class bitTable {
    constructor(rows, columns) {
        return new Array(rows).fill(
            new Array(columns).fill(0));
    }
}

class point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class node {
    constructor(point, dist) {
        this.point = {
            x: point.x,
            y: point.y
        }
        this.dist = dist;
    }
}

var x = new point(2, 3)
var test = new node(x, 0)

function isValid(row, col, boundRow, boundCol) {
    return (row >= 0) && (row < boundRow) &&
            (col >= 0) && (col < boundCol)
}

/*

Given a matrix of nodes marked with y/n,

*/
function shortestPaths(mat, start, dest) {
    const rowNum = [ -1, 0, 0, 1];
    const colNum = [0, -1, 1, 0];

    if (!mat[start.x][start.y] || !mat[dest.x][dest.y]) {
        return -1;
    }

    // create bitTable - in C++ it's called memset
    const visited = new bitTable(mat.length, mat[0].length)
    visited[start.x][start.y] = true;

    const queue = [];
    q.push(start);

    while (q.length > 0) {
        const curr = q[0]
        const pt = curr.point;

        if (pt.x === dest.x && pt.y === dest.y) {
            return curr.dist;
        }

        q.shift()

        for (var i = 0; i < 4; i++) {
            const row = pt.x + rowNum[i];
            const col = pt.y + colNum[i];

            if (isValid(row, col) && mat[row][col] && !visited[row][col]) {
                visited[row][col] = true;
                const toQ = new node({ row, col }, curr.dist + 1);
                q.push(toQ);
            }
        }
    }
    return -1

}