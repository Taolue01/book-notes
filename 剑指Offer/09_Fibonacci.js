/**
 * 面试题 9：
 * 题目一：写一个函数，输入n，求斐波那契（Fibonacci）数列的第n项。斐波那契数列的定义如下：
fn = {
0       n = 0
1       n = 1
f(n  - 1) + f(n - 2) n > 1
}
 *
 */
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function fibonacci1(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        var fibonacciResult = 1;
        var lastResult = 0;
        for (var index = 2; index <= n; index++) {
            var temp = fibonacciResult + lastResult;
            lastResult = fibonacciResult;
            fibonacciResult = temp;
        }
        return fibonacciResult;
    }
}
/***
 * 题目二： 一只青蛙一次可以跳上1 级台阶，也可以跳上2 级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 *
 * 分析得出 此题目为斐波那契数列的一种。n 从0 - 4 节分别为 0， 1, 2，3， 5…
 */
function FrogJumpingFibonacci(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 2;
    }
    else {
        var result = 2, a1 = 1, a2 = 2;
        for (var index = 3; index <= n; index++) {
            result = a1 + a2;
            a1 = a2;
            a2 = result;
        }
        return result;
    }
}
function main() {
    test();
}
function test() {
    var n = 6;
    var result = fibonacci(n);
    console.log('fibonacci result: ', result);
    n = 3;
    result = fibonacci1(n);
    console.log('fibonacci result: ', result);
    n = 4;
    result = FrogJumpingFibonacci(n);
    console.log('FrogJumpingFibonacci result: ', result);
}
main();
