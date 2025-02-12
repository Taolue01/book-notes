"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseNode = reverseNode;
/**
 * 题目：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 * 链表结点定义如下：
 *
 *     struct ListNode
    {
        int       m_nKey;
        ListNode＊ m_pNext;
    };
 *
 */
var TEST = true;
var RNode = /** @class */ (function () {
    function RNode(value, previous, next) {
        this.m_nKey = value;
        if (previous) {
            previous.m_pNext = this;
        }
        if (next) {
            this.m_pNext = next;
        }
    }
    RNode.prototype.toString = function () {
        return this.m_nKey + ' -> ' + (this.m_pNext ? this.m_pNext.toString() : '');
    };
    return RNode;
}());
function reverseNode(root) {
    var result = root;
    if (result !== undefined || result.m_pNext !== undefined) {
        var node = root, reverseHead = void 0, previous = void 0;
        while (node !== undefined) {
            var next = node.m_pNext;
            if (next === undefined) {
                reverseHead = node;
            }
            node.m_pNext = previous;
            previous = node;
            node = next;
        }
        result = reverseHead;
    }
    return result;
}
function main() {
    if (TEST) {
        test();
    }
}
function test() {
    var root = new RNode(1);
    var a = new RNode(10, root);
    var b = new RNode(11, a);
    var c = new RNode(15, b);
    var d = new RNode(19, c);
    var e = new RNode(100, d);
    var f = new RNode(109, e);
    var g = new RNode(100000, f);
    var h = new RNode(0, g);
    console.log(root.toString());
    console.log('reverse nodes :', reverseNode(root).toString());
}
main();
