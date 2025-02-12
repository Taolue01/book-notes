/***
 * 题目：实现函数 double Power（double base, int exponent）​，
 * 求 base 的exponent次方。不得使用库函数，同时不需要考虑大数问题。
 * 
 * 
 * 由于计算机表示小数（包括float和double型小数）都有误差，我们不能直接用等号（==）判断两个小数是否相等。
 */

interface INumber {
    EPSILON: any
}
declare var Number: INumber;


export function power(base: number, exponent: number): number {
    let result = 1;
    if (equal(base, 0.0) && exponent <= 0) {
        throw new Error('base = 0 and exponent <= 0 is invalid');
    }
    let absExponent = exponent < 0 ? -exponent : exponent;

    result = powerUnsignedD(base, absExponent);
    if (exponent < 0) {
        result = 1/result;
    }
    return result;
}

// 常规方法
function PowerUnsigned(base: number, absExponent: number): number {
    let result = 1;
    for (let index = 1; index <= absExponent; index++) {
        result *= base; 
    }
    return result;
}
// 
function powerUnsignedD(base: number, absExponent: number): number {
    let result = 0;
    if (absExponent === 0) {
        result = 1;
    } else if (absExponent === 1) {
        result = base;
    } else {
        result = powerUnsignedD(base, absExponent>>1);    // >>1 右移表示除以2
        result *= result;
        if((absExponent & 0x1) ===1)    // 判断基偶数
            result *= base;
        return result;

    }

    return result;
}

function equal(num1: number, num2: number): boolean {
    console.log('num1 - num2 ', num1 - num2, Number.EPSILON);
    if (num1 - num2 < Number.EPSILON) {
        return true;
    } else {
        return false;
    }
}


function main() {
    test();
}

function test() {
    let base = 10, exponent = 2;
    let result = power(base, exponent);
    console.log('power result:', result);


    base = 10, exponent = -3;
    result = power(base, exponent);
    console.log('power result:', result);


    base = 9, exponent = 2;
    result = power(base, exponent);
    console.log('power result:', result);
}

main();