"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mirroedBinaryTree = mirroedBinaryTree;
/**
 * 题目：请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 *
 *    struct BinaryTreeNode
    {
        int                 m_nValue;
        BinaryTreeNode＊       m_pLeft;
        BinaryTreeNode＊       m_pRight;
    };
*/
function mirroedBinaryTree(tree) {
    if (tree === undefined) {
        return tree;
    }
    var temp = tree.m_pLeft;
    tree.m_pLeft = tree.m_pRight;
    tree.m_pRight = temp;
    mirroedBinaryTree(temp);
    mirroedBinaryTree(tree.m_pLeft);
    return tree;
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
    return binaryTreeNode;
}());
function main() {
    test();
}
function test() {
    var cleft = new binaryTreeNode(5);
    var cright = new binaryTreeNode(7);
    var left = new binaryTreeNode(6, cleft, cright);
    var dleft = new binaryTreeNode(9);
    var dright = new binaryTreeNode(11);
    var right = new binaryTreeNode(10, dleft, dright);
    var root = new binaryTreeNode(8, left, right);
    console.log(mirroedBinaryTree(root));
}
main();
