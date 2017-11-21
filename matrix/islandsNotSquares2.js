var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

// BR1: 3,5
// BR2: 5,1
// BR3: 6,4

function findIslands(matrix) {
    let results = [];

    const visitMap = matrix.map((row, i) => {
        return row.map((col, j) => {
            return 0
        })
    })

    const rows = matrix.length;
    const cols = matrix.length;

    const isValidBottomRight = (row, col) => {
        // valid if right/left down are either 1's or out of bound

        if (
            (row === rows - 1 || matrix[row+1][col] === 0) &&
            (col === cols - 1 || matrix[row][col+1] === 0)
        ) {
            return false;
        }

        return true;
    }

    function subroutine(row, col) {

        if(!isValidBottomRight(row, col)) {
            return [row, col];
        }
        subroutine(row+1, col)
        subroutine(row, col+1)


    }

    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            if (matrix[i][j] === 0 && !visitMap[i][j]) {
                visitMap[i][j] = 1;
                results.push({
                    topLeft: [i, j],
                    bottomRight: subroutine(i, j)
                });
            }
        })
    })

    return results;
}

console.log(findIslands(image))