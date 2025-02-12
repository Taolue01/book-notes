"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMatrix = printMatrix;
/**
 * 题目：输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。例如：如果输入如下矩阵：
 *
 * 1    2    3    4
 * 5    6    7    8
 * 9    10   11   12
 * 13   14   15   16
 *
 */
function printMatrix(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return;
    }
    var columns = matrix.length;
    var rows = matrix[0].length;
    var start = 0;
    while (columns > start * 2 && rows > start * 2) {
        printMatrixNumbersInCircle(matrix, start);
        start++;
    }
}
function printMatrixNumbersInCircle(matrix, start) {
    var rows = matrix.length;
    var columns = matrix[0].length;
    var rowIndex = start, columnIndex = start;
    for (columnIndex = start; columnIndex < columns - start; columnIndex++) {
        console.log(matrix[rowIndex][columnIndex]);
    }
    columnIndex--;
    for (rowIndex = start + 1; rowIndex < rows - start; rowIndex++) {
        console.log(matrix[rowIndex][columnIndex]);
    }
    rowIndex--;
    columnIndex--;
    for (columnIndex; columnIndex >= start; columnIndex--) {
        console.log(matrix[rowIndex][columnIndex]);
    }
    columnIndex++;
    rowIndex -= 1;
    for (rowIndex; rowIndex > start; rowIndex--) {
        console.log(matrix[rowIndex][columnIndex]);
    }
    // console.log('index ', rowIndex, columnIndex);
}
function main() {
    test();
}
function test() {
    var matrix = [
        [1, 2, 3, 4, 5],
        [5, 6, 7, 8, 9],
        [9, 10, 11, 12, 13],
        [13, 14, 15, 16, 17]
    ];
    printMatrix(matrix);
}
main();
