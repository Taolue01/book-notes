
// Question 3
/* 题目 3
二维数组中的查找
在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
*/
function findInMatrix(matrix: number[][], rows: number, columns: number, num: number): boolean {
    let result = false;

    let column = columns - 1; 
    let row = 0;
    let loop = true;

    if (matrix == null ||  matrix.length <= 0  || matrix[0][0] > num || matrix[rows-1][columns - 1] < num 
        || rows <= 0 || columns <= 0
    ) {
        loop = false;
    }

    while (loop) {
        let temp = matrix[row][column];
        if (temp === num) {
            result = true;
            break;
        } else if (temp > num) {
            column = column - 1;
        } else {
            row = row + 1;
        }

        if  (row >= rows || column < 0) {
            loop = false;
        }
    }
    

    return result;
}


function findInMatrix2(matrix: number[][], rows: number, columns: number, num: number): boolean {
    let result = false;

    let column = 0; 
    let row = rows - 1 ;
    let loop = true;
    if (rows > 0 && columns > 0 ) {

    }

    if (matrix == null ||  matrix.length <= 0  || matrix[0][0] > num || matrix[rows-1][columns - 1] < num 
        || rows <= 0 || columns <= 0
    ) {
        loop = false;
    }

    while (loop) {
        let temp = matrix[row][column];
        if (temp === num) {
            result = true;
            break;
        } else if (temp > num) {
            row = row - 1;
        } else {
            column = column + 1;
        }

        if  (row < 0 || column >= columns - 1 ) {
            loop = false;
        }
    }
    

    return result;
}


const matrix = [
    [1, 2, 8, 9], 
    [2, 4, 9, 12], 
    [4, 7, 10, 13], 
    [6, 8, 11, 15]], n = 7;

const result = findInMatrix(matrix, 4, 4, n);
const result2 = findInMatrix2(matrix, 4, 4, n);
console.log(result, result2);





