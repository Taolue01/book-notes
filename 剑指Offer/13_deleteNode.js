"use strict";
/**
 * 面试题 13
 *
 * 题目：给定单向链表的头指针和一个结点指针，定义一个函数在 O（1）时间删除该结点。
 * 链表结点与函数的定义如下：
 *     struct ListNode
    {
        int       m_nValue;
        ListNode＊ m_pNext;
    };

    void DeleteNode（ListNode＊＊ pListHead, ListNode＊ pToBeDeleted）;
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNode = deleteNode;
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        this.value = value;
        if (next) {
            this.next = next;
        }
    }
    ListNode.prototype.toString = function () {
        return this.value + ' -> ' + (this.next ? this.next.toString() : '');
    };
    return ListNode;
}());
function deleteNode(head, pToBeDeleted) {
    if (head === undefined || head === null || head.next === null) {
        return;
    }
    while (head.next !== undefined) {
        if (head.next.value === pToBeDeleted.value) {
            var to = head.next;
            head.next = to.next;
            break;
        }
        else {
            head = head.next;
        }
    }
}
function deleteNodeO0(head, pToBeDeleted) {
    if (pToBeDeleted === undefined || head === undefined) {
        return;
    }
    if (pToBeDeleted.next !== undefined) {
        var next = pToBeDeleted.next;
        pToBeDeleted.value = next.value;
        pToBeDeleted.next = next.next;
    }
    else if (head === pToBeDeleted) {
        // delete next;
        // delete pToBeDeleted;
        // console.log('head === pToBeDeleted');
        head.value = -1;
    }
    else {
        deleteNode(head, pToBeDeleted);
    }
}
function main() {
    test();
}
function test() {
    var head = new ListNode(1);
    var a = new ListNode(2);
    head.next = a;
    var b = new ListNode(3);
    a.next = b;
    var c = new ListNode(10);
    b.next = c;
    var d = new ListNode(5);
    c.next = d;
    var e = new ListNode(20);
    console.log(head.toString());
    deleteNode(head, e);
    console.log(head.toString());
    deleteNodeO0(head, c);
    console.log(head.toString());
    deleteNodeO0(e, e);
    console.log(e);
}
main();
