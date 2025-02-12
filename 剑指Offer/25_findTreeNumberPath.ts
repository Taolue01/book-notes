/**
 * 题目：输入一棵二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。二叉树结点的定义如下：
 *     struct BinaryTreeNode
    {
        int                    m_nValue;
        BinaryTreeNode＊       m_pLeft;
        BinaryTreeNode＊       m_pRight;
    };
 */
function findPath(tree: IBinaryTreeNode, expectNum: number): void {
    if (tree === undefined) {
        return;
    }

     
}


interface IBinaryTreeNode {
    m_nValue: number;
    m_pLeft: IBinaryTreeNode;
    m_pRight: IBinaryTreeNode;
}

class FTbinaryTreeNode implements IBinaryTreeNode {
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
    const d = new FTbinaryTreeNode(10);
}

main();