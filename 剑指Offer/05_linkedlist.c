
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/** 链表 linked list 
 * 
 */
struct ListNode {
    int node_value;
    ListNode node_next;
};

void addNode(ListNode** head,int value) {
    ListNode* newNode = new ListNode();
    newNode->node_value = value;
    newNode->node_next = NULL;

    if (*head == NULL) {
        *head = newNode;
    } else {
        ListNode* tail = *head->node_next;
        while(tail->node_next != NULL) {
            tail = tail->node_next;
        }
        tail->node_next = newNode;
    }
}

void removeNode(ListNode** head, int value) {
    if (head == NULL || *head == NULL) {
        return;
    }
    ListNode* toBeDelete = NULL;

    if (*head->node_value == value) {
        toBeDelete = *head;
        *head = *head->node_next;
    } else {
        ListNode* node = *head;
        while(node->node_next != NULL) {
            if (node->node_next->node_value == value) {
                toBeDelete = node->node_next;
                node->node_next = toBeDelete->node_next;
                break;
            }
            node = node->node_next;
        }
    }
    if (toBeDelete != NULL) {
        delete toBeDelete;
        toBeDelete = NULL;
    }
}

/** 
 * Question 5
 * 题目：输入一个链表的头结点，从尾到头反过来打印出每个结点的值。
 * 
 * 链表结构如下
 * struct ListNode {
 *      int       m_nKey;
 *      ListNode＊ m_pNext;
 * };
 * 是否允许在打印链表的时候修改链表的结构？这个取决于面试官的需求，因此在面试的时候我们要询问清楚面试官的要求。
 */
struct ListReversalNode {
    int   m_nKey;
    struct ListReversalNode* m_pNext;
};
void printListReversal(ListReversalNode* head) {
    if (head == NULL) {
        return; 
    }
    std::stack<ListReversalNode *> nodes; 
    ListReversalNode* node = head;
    while (node->m_pNext != NULL) {
        nodes.push(node);
        node = node->m_pNext;
    }
    while (!nodes.empty())
    {
        node = nodes.top();
        printf("%d \t", node->m_nKey);
        nodes.pop();
    }
}
void printListRecursion(ListReversalNode* head) {
    if (head == NULL) {
        return;
    }
    ListReversalNode* node = head->m_pNext;
    if (node != NULL) {
        printListRecursion(node);
    } 
    printf("%s\t", node->m_nKey);
}
