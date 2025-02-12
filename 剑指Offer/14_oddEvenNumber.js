"use strict";
/**
 * 面试题 14：
 * 题目：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstOddLastEven = firstOddLastEven;
exports.moveNumbersToOddFirstEvenLast = moveNumbersToOddFirstEvenLast;
exports.exchangeOddAndEven = exchangeOddAndEven;
function firstOddLastEven(values) {
    var result = values;
    if (values !== undefined && values.length > 1) {
        var length_1 = values.length;
        var index = 0;
        var evens = [], odds = [];
        for (index = 0; index < length_1; index++) {
            if (values[index] % 2 === 0) {
                evens.push(values[index]);
            }
            else {
                odds.push(values[index]);
            }
        }
        result = odds.concat(evens);
    }
    return result;
}
function moveNumbersToOddFirstEvenLast(values) {
    var result = values;
    var evenCount = 0;
    var index = 0, totalCount = values.length;
    for (index = 0; index < totalCount; index++) {
        if (values[index] % 2 === 0) {
            evenCount += 1;
        }
    }
    for (index = 0; index < totalCount - evenCount; index++) {
        if (values[index] % 2 === 0) {
            var temp = values[index];
            for (var j = index; j < totalCount - 1; j++) {
                values[j] = values[j + 1];
            }
            values[totalCount - 1] = temp;
            index--;
        }
    }
    return result;
}
function isEven(num) {
    return (num & 0x1) === 0;
}
function exchangeOddAndEven(values, func) {
    var result = values;
    if (values.length > 0) {
        var p1 = 0, p2 = values.length - 1;
        while (p1 < p2) {
            while (p1 < p2 && !func(values[p1])) {
                p1++;
            }
            while (p1 < p2 && func(values[p2])) {
                p2--;
            }
            if (p1 < p2) {
                var temp = values[p1];
                values[p1] = values[p2];
                values[p2] = temp;
            }
        }
    }
    return result;
}
function main() {
    test();
}
function test() {
    var array1 = [3, 4, 5, 5, 6, 7, 1, 2, 2, 1, 10];
    var result = firstOddLastEven(array1);
    console.log('result is:', result);
    array1 = [3, 4, 5, 5, 6, 7, 1, 2, 2, 1, 10];
    result = moveNumbersToOddFirstEvenLast(array1);
    console.log('move Numbers result is:', result);
    array1 = [3, 4, 5, 5, 6, 7, 1, 2, 2, 1, 10];
    result = exchangeOddAndEven(array1, isEven);
    console.log('move Numbers result is:', result);
    array1 = [3];
    result = exchangeOddAndEven(array1, isEven);
    console.log('move Numbers result is:', result);
}
main();
