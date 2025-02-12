"use strict";
/**
 * 查找： 顺序查找、二分查找、哈希表查找和二叉树查找。
 *
 * 重点 不管是循环还是递归的实现， 必须完整的写出二分查找代码
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
// 顺序查找
function sequentialSearch(values, value) {
    var result = -1;
    if (values.length > 0) {
        for (var index = 0; index < values.length; index++) {
            if (values[index] === value) {
                result = index;
                break;
            }
        }
    }
    return result;
}
// 二分查找： 返回坐标
function binarySearch(values, value) {
    var result = -1;
    if ((values === null || values === void 0 ? void 0 : values.length) > 0) {
        var middle = Math.floor(values.length / 2);
        if (values[middle] === value) {
            result = middle;
        }
        else if (values[middle] > value) {
            middle;
            var count = values.length;
            result = binarySearch(values.slice(0, middle), value);
        }
        else {
            result = binarySearch(values.slice(middle + 1, values.length), value);
        }
    }
    return result;
}
function binarySearchLoop(values, value) {
    var result = -1;
    if ((values === null || values === void 0 ? void 0 : values.length) > 0) {
        var count = values.length;
        var left = 0, right = count - 1;
        while (left <= right) {
            var index = Math.floor((left + right) / 2);
            if (values[index] == value) {
                return index;
            }
            else {
                if (values[index] > value) {
                    right = index - 1;
                }
                else {
                    left = index + 1;
                }
            }
        }
    }
    return result;
}
function main() {
    var array1 = [1, 3, 4, 8, 9, 12];
    var searched = 4;
    var result = binarySearch(array1, searched);
    console.log('result ->', result);
    array1 = [1, 3, 4, 8, 9, 12];
    searched = 4;
    result = binarySearchLoop(array1, searched);
    console.log('result search loop ->', result);
}
main();
