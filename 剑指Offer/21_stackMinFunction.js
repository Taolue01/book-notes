/**
 * 题目：定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的min函数。
 * 在该栈中，调用min、push及pop的时间复杂度都是O（1）​。
 *
 */
var MFStack = /** @class */ (function () {
    function MFStack() {
        this.data = [];
        this.minData = [];
        this.data = [];
        this.minData = [];
    }
    MFStack.prototype.push = function (value) {
        this.data.push(value);
        if (this.minData.length === 0) {
            this.minData.push(value);
        }
        else {
            var min = this.minData[this.minData.length - 1];
            if (value < min) {
                this.minData.push(value);
            }
            else {
                this.minData.push(min);
            }
        }
    };
    MFStack.prototype.pop = function () {
        this.minData.pop();
        return this.data.pop();
    };
    MFStack.prototype.min = function () {
        return this.minData[this.minData.length - 1];
    };
    return MFStack;
}());
function main() {
    test();
}
function test() {
    var stack = new MFStack();
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
