"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSubtree = hasSubtree;
exports.doesTree1HaveTree2 = doesTree1HaveTree2;
/**
 * 题目：输入两棵二叉树A和B，判断B是不是A的子结构。二叉树结点的定义如下：
 *     struct BinaryTreeNode
    {
        int                    m_nValue;
        BinaryTreeNode＊       m_pLeft;
        BinaryTreeNode＊       m_pRight;
    };
 */
function hasSubtree(tree1, tree2) {
    var result = false;
    if (tree1 !== undefined && tree2 !== undefined) {
        if (tree1.m_nValue === tree2.m_nValue) {
            result = doesTree1HaveTree2(tree1, tree2);
        }
        if (!result) {
            result = hasSubtree(tree1.m_pLeft, tree2);
        }
        if (!result) {
            result = hasSubtree(tree1.m_pRight, tree2);
        }
    }
    return result;
}
function doesTree1HaveTree2(tree1, tree2) {
    if (tree2 === undefined) {
        return true;
    }
    if (tree1 === undefined) {
        return false;
    }
    if (tree1.m_nValue !== tree2.m_nValue) {
        return false;
    }
    var resunt = doesTree1HaveTree2(tree1.m_pLeft, tree2.m_pLeft) && doesTree1HaveTree2(tree1.m_pRight, tree2.m_pRight);
    return resunt;
}
var binaryTreeNode = /** @class */ (function () {
    function binaryTreeNode(value, left, right) {
        this.m_nValue = value;
        if (left) {
            this.m_pLeft = left;
        }
        if (right) {
            this.m_pRight = right;
        }
    }
    binaryTreeNode.prototype.toString = function () {
        var result = '' + this.m_nValue;
        if (this.m_pLeft) {
            result += ' left ->' + this.m_pLeft.toString();
        }
        else {
            result += ' left -> x';
        }
        if (this.m_pRight) {
            result += ' right ->' + this.m_pRight.toString();
        }
        else {
        }
        return result;
        ;
    };
    return binaryTreeNode;
}());
function main() {
    test();
}
function test() {
    var node4 = new binaryTreeNode(4);
    var node7 = new binaryTreeNode(7);
    var node9 = new binaryTreeNode(9);
    var node2 = new binaryTreeNode(2, node4, node7);
    var node8 = new binaryTreeNode(8, node9, node2);
    var nodeR7 = new binaryTreeNode(7);
    var rootA = new binaryTreeNode(8, node8, nodeR7);
    var b9 = new binaryTreeNode(9);
    var b2 = new binaryTreeNode(2);
    var rootB = new binaryTreeNode(8, b9, b2);
    console.log(rootA.toString(), rootB.toString());
    console.log(hasSubtree(rootA, rootB));
}
main();
