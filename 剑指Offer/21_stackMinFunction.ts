/**
 * 题目：定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的min函数。
 * 在该栈中，调用min、push及pop的时间复杂度都是O（1）​。
 * 
 */

interface IStack {
    min: () => number;
    pop: () => number;
    push:(value: number) => void;
}

class MFStack implements IStack {
    private data: number[] = [];
    private minData: number[] = [];

    push(value: number): void {
        this.data.push(value);
        if (this.minData.length === 0) {
            this.minData.push(value);
        } else {
            const min = this.minData[this.minData.length-1];
            if (value < min) {
                this.minData.push(value);
            } else {
                this.minData.push(min);
            }
        }
    }

    constructor() {
        this.data = [];
        this.minData = [];
    }

    pop(): any {
        this.minData.pop();
        return this.data.pop();
    }

    min(): number {
        return this.minData[this.minData.length - 1];
    }

}

function main() {
    test();
}

function test() {
    const stack = new MFStack();
    stack.push(10);
    
    console.log('min: ', stack.min());

    stack.push(100);
    console.log('min: ', stack.min());

    stack.push(0);
    console.log('min: ', stack.min());

    stack.push(100);
    console.log('min: ', stack.min());
}
main();