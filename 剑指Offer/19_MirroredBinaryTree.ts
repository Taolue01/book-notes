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
export function mirroedBinaryTree(tree: IBinaryTreeNode): IBinaryTreeNode {
    if (tree === undefined) {
        return tree;
    }
    const temp = tree.m_pLeft;
    tree.m_pLeft = tree.m_pRight;
    tree.m_pRight = temp;
    mirroedBinaryTree(temp);
    mirroedBinaryTree(tree.m_pLeft);
    return tree;
}

interface IBinaryTreeNode {
    m_nValue: number;
    m_pLeft: IBinaryTreeNode;
    m_pRight: IBinaryTreeNode;
}

class binaryTreeNode implements IBinaryTreeNode {
    m_nValue: number;
    m_pLeft: IBinaryTreeNode;
    m_pRight: IBinaryTreeNode;
    constructor(value: number, left?: IBinaryTreeNode, right?: IBinaryTreeNode) {
        this.m_nValue = value;
        if (left) {
            this.m_pLeft = left;
        }
        if (right) {
            this.m_pRight = right;
        }
    }
}

function main() {
    test();
}

function test() {
    const cleft = new binaryTreeNode(5);
    const cright = new binaryTreeNode(7)
    const left = new binaryTreeNode(6, cleft, cright);
    const dleft = new binaryTreeNode(9);
    const dright = new binaryTreeNode(11);
    const right = new binaryTreeNode(10, dleft, dright);
    const root = new binaryTreeNode(8, left, right);

    console.log(mirroedBinaryTree(root));
}

main();
