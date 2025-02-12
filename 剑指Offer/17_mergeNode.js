"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeListNode = mergeListNode;
/**
 * 题目：输入两个递增排序的链表，合并这两个链表并使新链表中的结点仍然是按照递增排序的。
 * 例如输入图3.7中的链表1和链表2，则合并之后的升序链表如链表3所示。链表结点定义如下：
 *     struct ListNode
    {
        int      m_nValue;
        ListNode＊ m_pNext;
    };
 */
function mergeListNode(node1, node2) {
    if (node1 === undefined) {
        return node2;
    }
    else if (node2 === undefined) {
        return node1;
    }
    var mergedHead;
    if (node1.m_nValue < node2.m_nValue) {
        mergedHead = node1;
        mergedHead.m_pNext = mergeListNode(node1.m_pNext, node2);
    }
    else {
        mergedHead = node2;
        mergedHead.m_pNext = mergeListNode(node1, node2.m_pNext);
    }
    return mergedHead;
}
var TEST = true;
var MListNode = /** @class */ (function () {
    function MListNode(value, next) {
        this.m_nValue = value;
        if (next) {
            this.m_pNext = next;
        }
    }
    MListNode.prototype.toString = function () {
        var result = '' + this.m_nValue;
        if (this.m_pNext) {
            result += ' -> ' + this.m_pNext.toString();
        }
        return result;
    };
    return MListNode;
}());
function main() {
    if (TEST) {
        test();
    }
}
function test() {
    var list1 = [1, 3, 5, 7, 8];
    var list2 = [2, 3, 6, 7, 9];
    var nodelist1 = createList(list1);
    var nodelist2 = createList(list2);
    console.log('node list ', nodelist1.toString(), nodelist2.toString());
    console.log(' merge result', mergeListNode(nodelist1, nodelist2).toString());
    var nodelist3 = new MListNode(10);
    console.log(' merge result', mergeListNode(createList(list1), nodelist3).toString());
}
function createList(values) {
    var previous;
    for (var index = values.length - 1; index >= 0; index--) {
        var temp = new MListNode(values[index], previous);
        previous = temp;
    }
    return previous;
}
main();
