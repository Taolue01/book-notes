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

interface IQueue {
    enqueue(item: number): void;
    dequeue(): number | undefined;
    size(): number;
}


class MyQueue implements IQueue {
    private stack1: number[];
    private stack2: number[];
    private count: number;
    constructor() {
        this.stack1 = [];
        this.stack2 = []; 
        this.count = 0;
    }

    push(x: number): void {
        this.stack1.push(x);
        this.count += 1;
    }

    appendTail(value: number) {
        this.stack1.push(value);
        this.count += 1;
    }

    pop(): number {
        let result;
        let loop = true;
        if (this.stack2.length === 0) {

            while (loop) {
                let value: any = this.stack1.pop();
                this.stack2.push(value);
                if (this.stack1.length === 0) {
                    break;
                }
            }

        }
        
        result = this.stack2.pop();
        this.count -= 1;
        return result;
    }

    peek(): number {
        if (this.stack2.length === 0) {
            return this.stack1[0];
        } else {
            return this.stack2[this.stack2.length - 1];
        }
    }

    deleteHead(): number {
        let result;
        if (this.stack2.length === 0) {
            for (let index = this.count - 1; index >= 0; index--) {
                let value: any = this.stack1.pop();
                if (index !== 0) {
                    this.stack2.push(value);
                } else {
                    result = value;
                }
            }
        } else {
            result = this.stack2.pop();
        }
        this.count -= 1;
        return result;
    }

    enqueue(item: number): void {

    }

    dequeue(): number | undefined {
        return;
    }

    empty(): boolean {
        return this.count === 0;
    }

    size(): number {
        return this.count;
    }
}


export function main() {
    const queue = new MyQueue();
    queue.appendTail(1);
    queue.deleteHead();
}


main();