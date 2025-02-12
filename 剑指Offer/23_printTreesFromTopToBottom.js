/**
 * 题目：从上往下打印出二叉树的每个结点，同一层的结点按照从左到右的顺序打印。
 *
 * 二叉树结构：
 *     struct BinaryTreeNode
    {
        int                    m_nValue;
        BinaryTreeNode＊       m_pLeft;
        BinaryTreeNode＊       m_pRight;
    };
 * 例如输入二叉树
 *              8
 *         6        10
 *      5     7    9    11
 * 则依次打印出8、6、10、5、7、9、11。
 */
function printTreeFromTopToBottom(root) {
    if (root === undefined) {
        return;
    }
    var container = [root];
    // console.log(root.m_nValue);
    // container.push(root.m_pLeft);
    // container.push(root.m_pRight);
    while (container.length > 0) {
        var node = container[0];
        console.log(node.m_nValue);
        if (node.m_pLeft) {
            container.push(node.m_pLeft);
        }
        if (node.m_pRight) {
            container.push(node.m_pRight);
        }
        container.splice(0, 1);
    }
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
    var ccLeft = [new binaryTreeNode(2), new binaryTreeNode(19)];
    var childLefts = [new binaryTreeNode(5, undefined, ccLeft[0]), new binaryTreeNode(7, ccLeft[1])];
    var node = new binaryTreeNode(6, childLefts[0], childLefts[1]);
    var childRight = [new binaryTreeNode(9), new binaryTreeNode(11)];
    var node2 = new binaryTreeNode(10, childRight[0], childRight[1]);
    var root = new binaryTreeNode(8, node, node2);
    printTreeFromTopToBottom(root);
}
main();
