"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKth = findKth;
exports.findKthLastNode = findKthLastNode;
exports.findKthLastNode2 = findKthLastNode2;
var TEST = true;
var FKNode = /** @class */ (function () {
    function FKNode(value, previous, next) {
        this.m_nValue = value;
        if (previous) {
            previous.m_pNext = this;
        }
        if (next) {
            this.m_pNext = next;
        }
    }
    FKNode.prototype.toString = function () {
        return this.m_nValue + ' -> ' + (this.m_pNext ? this.m_pNext.toString() : '');
    };
    return FKNode;
}());
/**
 * 解法一
 * 我们需要遍历链表两次，第一次统计出链表中结点的个数，第二次就能找到倒数第 k 个结点。
*/
function findKth(root, k) {
    var result = Number.MAX_SAFE_INTEGER;
    if (root !== undefined || root !== null) {
        var count = 0;
        var node = root;
        while (true) {
            count += 1;
            node = node.m_pNext;
            if (node.m_pNext === undefined) {
                break;
            }
        }
        var index = count - k + 1;
        if (index >= 0) {
            node = root;
            for (var i = 0; i < index; i++) {
                node = node.m_pNext;
            }
            result = node.m_nValue;
        }
    }
    return result;
}
/**
 * 解法二
 * 为了实现只遍历链表一次就能找到倒数第 k 个结点，我们可以定义两个指针。
 * 第一个指针从链表的头指针开始遍历向前走k-1，第二个指针保持不动；
 * 从第 k 步开始，第二个指针也开始从链表的头指针开始遍历。
 * 由于两个指针的距离保持在k-1，当第一个（走在前面的）指针到达链表的尾结点时，
 * 第二个指针（走在后面的）指针正好是倒数第k个结点。
 */
function findKthLastNode(root, k) {
    var result = Number.MAX_SAFE_INTEGER;
    if (root !== undefined || root !== null) {
        var node = root;
        var index = 0;
        var r_node = void 0;
        while (true) {
            index += 1;
            if (index > (k - 1)) {
                r_node = r_node ? r_node.m_pNext : root;
            }
            node = node.m_pNext;
            if ((node === null || node === void 0 ? void 0 : node.m_nValue) === undefined) {
                break;
            }
        }
        if (index >= k) {
            result = r_node.m_nValue;
        }
    }
    return result;
}
function findKthLastNode2(root, k) {
    var pAHead = root, pBehind;
    var result = Number.MAX_SAFE_INTEGER, r = false;
    for (var i = 0; i < k - 1; i++) {
        if (pAHead.m_pNext !== undefined) {
            pAHead = pAHead.m_pNext;
        }
        else {
            r = true;
            break;
        }
    }
    if (r === false) {
        pBehind = root;
        while (pAHead.m_pNext !== undefined) {
            pBehind = pBehind.m_pNext;
            pAHead = pAHead.m_pNext;
        }
        result = pBehind.m_nValue;
    }
    return result;
}
function main() {
    if (TEST) {
        test();
    }
}
function test() {
    var root = new FKNode(1);
    var a = new FKNode(10, root);
    var b = new FKNode(11, a);
    var c = new FKNode(15, b);
    var d = new FKNode(19, c);
    var e = new FKNode(100, d);
    var f = new FKNode(109, e);
    var g = new FKNode(100000, f);
    var h = new FKNode(0, g);
    console.log(root.toString());
    console.log('find Kth result is: ', findKth(root, 2));
    console.log('find Kth result is: ', findKth(root, 6));
    console.log('find Kth result is: ', findKth(root, 9), 9);
    console.log('find Kth result is: ', findKth(root, 10), 10);
    console.log('find Kth Last Node result is: ', findKthLastNode(root, 2));
    console.log('find Kth Last Node result is: ', findKthLastNode(root, 6));
    console.log('find Kth Last Node result is: ', findKthLastNode(root, 9), 9);
    console.log('find Kth Last Node result is: ', findKthLastNode(root, 10), 10);
    var root_a = new FKNode(1);
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 1));
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 6));
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 9), 9);
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 10), 10);
    console.log('find Kth Last Node result is: ', findKthLastNode2(root, 0));
    console.log('find Kth Last Node result is: ', findKthLastNode2(root, 6));
    console.log('find Kth Last Node result is: ', findKthLastNode2(root, 9), 9);
    console.log('find Kth Last Node result is: ', findKthLastNode2(root, 10), 10);
}
main();
