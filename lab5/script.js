//1
function counterEquals(arr) {
    if (!arr || arr.length < 2) {
      return 0; 
    }

    let count = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        count++;
      }
    }

    return count;
}
let numbers = [1, 2, 2, 3, 3, 3, 4, 4];
console.log(counterEquals(numbers));


numbers = [1, 2, 3, 4, 5];
console.log(counterEquals(numbers));

numbers = [];
console.log(counterEquals(numbers));




//2
function sumNegativeColumns(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    const numColumns = matrix[0].length;
  
    const columnSums = [];
  
    for (let j = 0; j < numColumns; j++) {
  
        let columnSum = 0;
  
        for (let i = 0; i < matrix.length; i++) {
            const number = matrix[i][j];
            if (number < 0) {
                columnSum += number;
            }
      }
  
      columnSums.push(columnSum);
    }

    return columnSums;
}


let matrix = [
    [5, -5, 4],
    [-6, 7, -2],
    [3, -5, 1],
    [3, -9, 8],
]
console.log(sumNegativeColumns(matrix));

matrix = [
    [0, -13, 3, 14],
    [-5, 5, -6, 6],
    [9, -8, 9, -5],
]
console.log(sumNegativeColumns(matrix));

matrix = [
    [7, 2, 3],
    [5, 5, -6],
    [7, 1, 6],
]
console.log(sumNegativeColumns(matrix));