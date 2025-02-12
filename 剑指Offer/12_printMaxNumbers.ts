/**
 * 面试题 12
 * 
 * 题目：输入数字n，按顺序打印出从1最大的n位十进制数。比如输入3，
 * 则打印出1、2、3一直到最大的3位数即999。
 */

interface INumber {
    EPSILON: any;
    MAX_SAFE_INTEGER: any; // 9007199254740991
}
declare var Number: INumber;

export function printMaxNumbers(n: number) {
    console.log('n = ', n);
    let max = '';
    if (n > 0) {
        while (max.length < n) {
            if (max === '') {
                max = '9';
            } else {
                max = max + '9';
            }
            console.log('max', max);           
        }
        printMaxedNumbers(max);  
    }
}

function printMaxedNumbers(max: string, prefix?: string): void {
    if (max.length > 1) {
        prefix = prefix ? prefix : '';
        for (let i = 0; i < 10; i++) {
            printMaxedNumbers(max.slice(1), prefix + i.toString())
        }
    } else {
        for (let i = 0; i < 10; i++) {
            console.log(prefix + `${i}`);
        }
    }

}

function main() {
    // code test;
    test();
}

function test() {
    let n = 2;
    // printMaxNumbers(n);
    // printMaxNumbers(10);
    printMaxNumbers(0);
    printMaxNumbers(1);
    printMaxNumbers(3);

    printMaxNumbers(5);

    printMaxNumbers(-1);


}

main();