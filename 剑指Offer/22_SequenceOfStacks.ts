/**
 * 题目：输入两个整数序列，第一个序列表示栈的压入顺序，
 * 请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1、2、3、4、5 是某栈的压栈序列，
 * 序列4、5、3、2、1 是该压栈序列对应的一个弹出序列，但4、3、5、1、2 就不可能是该压栈序列的弹出序列。
 * 
 */
function isPopSequence(pushOrder: number[], popOrder: number[]): boolean {
    let result = false;
    if ((pushOrder !== undefined || popOrder !== undefined) && pushOrder.length === popOrder.length) {

        const stack: number[] = [];
        for (let i = 0, j = 0; i < popOrder.length; i++) {
            stack.push(pushOrder[i]);

            while (j < popOrder.length && stack[stack.length -1] === popOrder[j]) {
                stack.pop();
                j++;
            }
        }

        result = stack.length === 0;

    }

    return result;
}

function main() {
    test();
}

function test() {
    console.log('is sequence stacks:', isPopSequence([1,2,3,4,5], [4,3,5,2,1]));
}

main();

