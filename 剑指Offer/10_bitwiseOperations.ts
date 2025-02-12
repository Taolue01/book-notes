/**
 * 面试题10：
 * 题目：请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。
 * 例如把9表示成二进制是1001，有2位是1。因此如果输入9，该函数输出2。
 * 
 * 
 * 
 */
function number1count(n: number): number {
    let count = 0;
    while (n) {
        if (n & 1) {
            count++;
        }
        n = n >> 1;
    }

    return count;
}

function countOf1(n: number): number {
    let count = 0;
    let flag = 1;
    while (flag) {
        if (n & flag) {
            count++;
        }
        flag = flag << 1;
    }

    return count;
}

function countOf1D(n: number): number {
    let count = 0;
    while (n) {
        count++;
        n = (n - 1)&n;
    }
    return count;
}

function main() {
    test();
}

function test() {
    let n = 9;
    let result = 0;

    result = number1count(n);
    console.log(n, '1 count is:', result);

    n = 7;
    result = number1count(n);
    console.log(n, '1 count is:', result);

    n = 0x80000000;
    result = countOf1(n);
    console.log(n, '1 count is:', result);


    n = -1;
    result = countOf1(n);
    console.log(n, '1 count is:', result);


    n = -1;
    result = countOf1D(n);
    console.log(n, '1 countOf1D is:', result);
}

main();