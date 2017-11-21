class Matrix {

  constructor(rows, columns) {
      this.rows = rows;
      this.columns = columns;
  }

  createNumberMatrix() {
    console.log(this.rows, this.columns);
  }

  drawSpiral(num) {
    /*
      What state do I need to track?

      How many stars I'm drawing
      What direction am I going

      Termination state => no more stars to draw

    */
    let results = this.createMatrix()

    let t = 0;
    let left = 0;
    let right = this.columns - 1;
    let b = this.rows - 1;

    let linesToDraw = this.columns - 1;

    while (linesDrawn < linestoDraw) {
      for (let j = left; j <= linesToDraw; ++j) {
        results[t][j] = "*"
      }
      top++
      linesToDraw--

      for (let i = t; i <= linesToDraw; ++i) {
        results[i][r] = "*"
      }
      right--
      linesToDraw--

      for (let j = r; j >= linesToDraw; --j) {
        results[b][j] = "*"
      }
      bottom--
      linesToDraw--


      for (let i = r; i >= linesToDraw; --i) {
        results[i][l] = "*"
      }
      left++
      linesToDraw--

    }

    return results;

  }

  }



  createMatrix() {
    const { rows, columns } = this;
    return new Array(rows).fill(
      new Array(columns).fill(0));;
  }
}

const testMatrix = new Matrix(7,7)

testMatrix.drawSpiral()

