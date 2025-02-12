"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
/***
 * 面试题8：
 * 题目：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
 * 输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 *
 *
 * 旋转数组可以是两个排序好的子数组，可以使用二分查找。
 *
 *
 * 特殊点：1.如果把排序数组的前面的 0 个元素搬到最后面，即排序数组本身，这仍然是数组的一个旋转，我们的代码需要支持这种情况。
 * 2.
 */
function findMinimumValueInRotatedArray(values) {
    var minimum;
    var left = 0, right = 0;
    if (values.length > 0) {
        right = values.length - 1;
        var index = left;
        minimum = values[index];
        while (values[left] >= values[right]) {
            if (right - left === 1) {
                minimum = values[right];
                break;
            }
            index = Math.ceil((right + left) / 2);
            ;
            // 当 index left right 的值相等时，需要按顺序查找
            if (values[index] === values[left] && values[index] === values[right]) {
                minimum = findMinimumValueSequential(values);
                break;
            }
            if (values[index] >= values[left]) {
                left = index;
            }
            else if (values[index] <= values[right]) {
                right = index;
            }
        }
    }
    return minimum;
}
function findMinimumValueSequential(values) {
    var minimum;
    if (values.length > 0) {
        minimum = values[0];
        for (var index = 1; index < values.length; index++) {
            if (minimum > values[index]) {
                minimum = values[index];
            }
        }
    }
    return minimum;
}
function main() {
    test();
}
function test() {
    var arr1 = [3, 4, 5, 1, 2];
    var result = findMinimumValueInRotatedArray(arr1);
    console.log('rotated array find minimum value:', result);
    arr1 = [2, 3, 4, 5, 1, 1];
    result = findMinimumValueInRotatedArray(arr1);
    console.log('rotated array find minimum value:', result);
    arr1 = [2, 3, 3, 4, 5];
    result = findMinimumValueInRotatedArray(arr1);
    console.log('rotated array find minimum value:', result);
    arr1 = [1, 1, 1, 0, 1, 1, 1];
    result = findMinimumValueInRotatedArray(arr1);
    console.log('rotated array find minimum value:', result);
    arr1 = [1];
    result = findMinimumValueInRotatedArray(arr1);
    console.log('rotated array find minimum value:', result);
    arr1 = [];
    result = findMinimumValueInRotatedArray(arr1);
    console.log('rotated array find minimum value:', result);
}
// 
main();
