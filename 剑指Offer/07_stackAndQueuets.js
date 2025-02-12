"use strict";
/**
 * 编译ts 文件
 * tsc file.ts
 *
 * 栈的特点是后进先出，即最后被压入（push）栈的元素会第一个被弹出（pop）​。通常栈是一个不考虑排序的数据结构，
 * 我们需要 O（n）时间才能找到栈中最大或者最小的元素。
 *
 * 队列是另外一种很重要的数据结构。和栈不同的是，队列的特点是先进先出，
 * 即第一个进入队列的元素将会第一个出来。
 *
 * 面试题7： 用两个栈实现队列
 * 题目：用两个栈实现一个队列。队列的声明如下，请实现它的两个函数appendTail和deleteHead，
 * 分别完成在队列尾部插入结点和在队列头部删除结点的功能。
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.stack1 = [];
        this.stack2 = [];
        this.count = 0;
    }
    MyQueue.prototype.push = function (x) {
        this.stack1.push(x);
        this.count += 1;
    };
    MyQueue.prototype.appendTail = function (value) {
        this.stack1.push(value);
        this.count += 1;
    };
    MyQueue.prototype.pop = function () {
        var result;
        var loop = true;
        if (this.stack2.length === 0) {
            while (loop) {
                var value = this.stack1.pop();
                this.stack2.push(value);
                if (this.stack1.length === 0) {
                    break;
                }
            }
        }
        result = this.stack2.pop();
        this.count -= 1;
        return result;
    };
    MyQueue.prototype.peek = function () {
        if (this.stack2.length === 0) {
            return this.stack1[0];
        }
        else {
            return this.stack2[this.stack2.length - 1];
        }
    };
    MyQueue.prototype.deleteHead = function () {
        var result;
        if (this.stack2.length === 0) {
            for (var index = this.count - 1; index >= 0; index--) {
                var value = this.stack1.pop();
                if (index !== 0) {
                    this.stack2.push(value);
                }
                else {
                    result = value;
                }
            }
        }
        else {
            result = this.stack2.pop();
        }
        this.count -= 1;
        return result;
    };
    MyQueue.prototype.enqueue = function (item) {
    };
    MyQueue.prototype.dequeue = function () {
        return;
    };
    MyQueue.prototype.empty = function () {
        return this.count === 0;
    };
    MyQueue.prototype.size = function () {
        return this.count;
    };
    return MyQueue;
}());
function main() {
    var queue = new MyQueue();
}
main();
