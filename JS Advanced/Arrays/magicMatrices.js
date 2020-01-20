function solve(matrix) {
    const rowsSum = new Array(matrix.length).fill(0, 0, matrix.length);;
    const colsSum = new Array(matrix.length).fill(0, 0, matrix.length);;

    for (let rows = 0; rows < matrix.length; rows++) {

        for (let cols = 0; cols < matrix.length; cols++) {
            const element = matrix[rows][cols];
            rowsSum[rows] += element;
            colsSum[cols] += element;

        }

        if (rows !== 0 && rowsSum[rows] !== rowsSum[rows - 1] && colsSum[rows] !== colsSum[rows - 1]) {
            return false;
        }
    }

    return true;
}
