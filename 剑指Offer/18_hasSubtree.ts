/**
 * 题目：输入两棵二叉树A和B，判断B是不是A的子结构。二叉树结点的定义如下：
 *     struct BinaryTreeNode
    {
        int                    m_nValue;
        BinaryTreeNode＊       m_pLeft;
        BinaryTreeNode＊       m_pRight;
    };
 */
export function hasSubtree(tree1: IBinaryTreeNode, tree2: IBinaryTreeNode): boolean {
    let result = false;
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

export function doesTree1HaveTree2(tree1: IBinaryTreeNode, tree2: IBinaryTreeNode): boolean {
    if (tree2 === undefined) {
        return true;
    }
    if (tree1 === undefined) {
        return false;
    }
    if (tree1.m_nValue !== tree2.m_nValue) {
        return false;
    }
    let resunt =  doesTree1HaveTree2(tree1.m_pLeft, tree2.m_pLeft) && doesTree1HaveTree2(tree1.m_pRight, tree2.m_pRight);   
    return resunt;
} 


interface IBinaryTreeNode {
    m_nValue: number;
    m_pLeft: IBinaryTreeNode;
    m_pRight: IBinaryTreeNode;
    toString: () => string;
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

    toString() {
        let result = '' + this.m_nValue;
        if (this.m_pLeft) {
            result += ' left ->' + this.m_pLeft.toString();
        } else {
            result += ' left -> x'
        } 
        if (this.m_pRight) {
            result += ' right ->' + this.m_pRight.toString();
        } else {

        }
        return result;;
    }

}

function main() {
    test();
}

function test() {
    const node4 = new binaryTreeNode(4);
    const node7 = new binaryTreeNode(7);
    const node9 = new binaryTreeNode(9);
    const node2 = new binaryTreeNode(2, node4, node7);
    const node8 = new binaryTreeNode(8, node9, node2);
    const nodeR7 = new binaryTreeNode(7);
    const rootA =  new binaryTreeNode(8, node8, nodeR7);


    const b9 = new binaryTreeNode(9);
    const b2 = new binaryTreeNode(2);
    const rootB = new binaryTreeNode(8, b9, b2);

    console.log(rootA.toString(), rootB.toString());

    console.log(hasSubtree(rootA, rootB));
}

main();