function solve(matrix) {
    const rowsSum = new Array(matrix.length).fill(0,0,matrix.length);;
    const colsSum = new Array(matrix.length).fill(0,0,matrix.length);;

    for (let rows = 0; rows < matrix.length; rows++) {

        for (let cols = 0; cols < matrix.length; cols++) {
            const element = matrix[rows][cols];
            rowsSum[rows] += element;
            colsSum[cols] += element;
        }
    }

    for (let i = 1; i < rowsSum.length; i++) {
        const element = rowsSum[i];
        const element2 = colsSum[i];

        if(element !== rowsSum[i -1] || element2 !== colsSum[i-1]){
            return false;
        }
    }

    return true;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
   ));