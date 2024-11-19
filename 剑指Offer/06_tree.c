#include <stdlib.h>
#include <stdio.h>
#include <math.h>

/**
 * 06 重建二叉树
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
 * 则重建出图2.6所示的二叉树并输出它的头结点。二叉树结点的定义如下：
 * struct BinaryTreeNode { 
 * int m_nValue; 
 * BinaryTreeNode＊ m_pLeft; 
 * BinaryTreeNode＊ m_pRight; };
 * 
 * 
 * ##   在二叉树的前序遍历序列中，第一个数字总是树的根结点的值。
 * 但在中序遍历序列中，根结点的值在序列的中间，
 * 左子树的结点的值位于根结点的值的左边，
 * 而右子树的结点的值位于根结点的值的右边。##
 */

typedef struct binaryTreeNode
{
    int value;
    struct binaryTreeNode *left;
    struct binaryTreeNode *right;
}Node;

void test();
void printPreorder(Node* node);
void printInorder(Node* node);
void printPostorder(Node* node);
Node* constructTree(int* preorder, int* inorder, int length);
Node* constructTreeCore(int* preorder, int* endPreorder, int* startInorder,int*  endInorder);

int main(int argc, char const *argv[])
{
    test();
    return 0;
}

Node* constructTree(int* preorder, int* inorder, int length) {
    if (preorder == NULL || inorder == NULL || length <= 0) {
        return NULL;
    }

    return constructTreeCore(preorder, preorder + length - 1, inorder, inorder + length - 1);
}

Node* constructTreeCore(int* startPreorder, int* endPreorder, int* startInorder,int*  endInorder) {
    Node* root;
    if (startPreorder == endPreorder || startInorder == endInorder) {
        root = malloc(sizeof(Node));
        root->value = startPreorder[0];
        return root;
    } 

    int rootValue = startPreorder[0];
    
    root = malloc(sizeof(Node));
    root->value = rootValue;
    root->left = NULL;
    root->right = NULL;

    int offset = 0;
    for (offset = 0; startInorder + offset <= endInorder; offset++) {
        if (rootValue == *(startInorder + offset)) {
            break;
        }
    }

    if (offset == 0) {
        root->right = constructTreeCore(startPreorder + offset + 1, endPreorder, startInorder + offset + 1, endInorder);
    } else if (startInorder + offset == endInorder) {
        root->left = constructTreeCore(startPreorder + 1, startPreorder + offset, startInorder,  startInorder + offset - 1);
    } else {
        root->left = constructTreeCore(startPreorder + 1, startPreorder + offset, startInorder,  startInorder + offset - 1);
        root->right = constructTreeCore(startPreorder + offset + 1, endPreorder, startInorder + offset + 1, endInorder);
    }   
    return root;
}



// 前序
void printPreorder(Node* node) {
    if (node != NULL) {
        printf(" %d ", node->value);
        printPreorder(node->left);
        printPreorder(node->right);
    } else {
        // printf(" # ");
    }
}

// 中序
void printInorder(Node* node) {
    if (node != NULL) {
        printInorder(node->left);
        printf(" %d ", node->value);
        printInorder(node->right);
    } else {
        // printf(" # ");
    }
}
// 后序
void printPostorder(Node* node) {
 if (node != NULL) {
        printPostorder(node->left);
        printPostorder(node->right);
        printf(" %d ", node->value);
    } else {
        // printf(" # ");
    }
}

void test() {
    int a1[8] = {1,2,4,7,3,5,6,8};
    int a2[8] = {4,7,2,1,5,3,8,6};
    int count = 8;

    // int a1[3] = {1, 3, 2};
    // int a2[3] = {3, 1, 2};
    // int count = 3;

    Node *rNode = constructTree(a1, a2, count);

    // int* a3 = a1 + 7;
    // printf("%d %d %p %p ", a1 + 7 >= a3, *(a1 + 7), a1 - 1, a1);

    printPreorder(rNode);
    printf("\n");
    printInorder(rNode);
    printf("\n");
    printPostorder(rNode);
}



