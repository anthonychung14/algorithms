const matrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const matrix2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,'A','B','C'],
    ['D','E','F','G']
 ];

 const rotateInPlace = (matrix) => {
     const matrixDimension = matrix.length;


     for (let i = 0; i < matrixDimension; i++) {
         for (let j = i; j < matrixDimension - 1 - i; j++) {


             const temp = matrix[i][j];

             // const right = matrix[j][matrixDimension - 1 - i];

             // top now equals right
             matrix[i][j] = matrix[j][matrixDimension - 1 - i];

             // right now equals bottom
             matrix[y][matrixDimension - 1 - i] = matrix[matrixDimension - 1 - i][matrixDimension - 1 - j];

             // bottom now equals right
             matrix[y][matrixDimension - 1 - i] = matrix[matrixDimension - 1 - i][matrixDimension - 1 - j]

             // left now equals temp
             matrix[matrixDimension - 1 - j][i] = temp
         }
     }
     return matrix;
 }

 rotateInPlace(matrix1);
