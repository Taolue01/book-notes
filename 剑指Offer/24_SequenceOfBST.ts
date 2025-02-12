/**
 * 题目：输入一个整数数组，
 * 判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * 
 * 二叉搜索树：（二叉查找树）可以为空；如果不为空，满足以下性质：
 * 非空左子树的所有键值小于其根结点的键值。
 * 非空右子树的所有键值大于其根结点的键值。
 * 左、右子树都是二叉搜索树。
 * 
 */
function VerifySequenceOfBST(sequence: number[], length: number): boolean {
    if (sequence === undefined || length <= 0) {
        return false;
    }
    // 
    let root = sequence[length - 1];

    let i = 0
    for (i = 0; i < length; ++i) {
        if (sequence[i] > root) {
            break;
        }
    }
    let j = i;
    for (; j < sequence.length - 1; ++j) {
        if (sequence[j] < root) {
            return false;
        }
    }

    let left = true;
    if (i > 0) {
        left = VerifySequenceOfBST(sequence, i);
    }
    let right = true;
    if (j < length - 1) {
        right = VerifySequenceOfBST(sequence, length - i - 1);
    }

    return left && right;
}

function VerifySequenceOfBST2(sequence: number[]): boolean {
    let result = false;
    if (sequence?.length > 0) {
        result = VerifySequenceOfBSTCore(sequence, 0, sequence.length - 1);
    }
    return result;
}

function VerifySequenceOfBSTCore(sequence: number[], start: number, end: number) {
    if (start > end) {
        return true;
    }
    let middle = start;
    while(sequence[middle] < sequence[end]) {
        middle++;
    }
    for(let i = middle; i < end; i++) {
        if (sequence[i] < sequence[end]) {
            return false;
        }
    }
    return VerifySequenceOfBSTCore(sequence, start, middle-1) && VerifySequenceOfBSTCore(sequence, middle, end -1);
}

function main() {
    test();
}

function test() {
    const d = [5, 7, 6, 9, 11, 10, 8];
    console.log('test reuslt', VerifySequenceOfBST2(d));
    console.log('test reuslt', VerifySequenceOfBST2([5, 7, 9, 6, 11]));
    console.log('test result:', VerifySequenceOfBST2([7, 4, 6, 5]))
}
main();