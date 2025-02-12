/**
 * 面试题 13
 * 
 * 题目：给定单向链表的头指针和一个结点指针，定义一个函数在 O（1）时间删除该结点。
 * 链表结点与函数的定义如下：
 *     struct ListNode
    {
        int       m_nValue;
        ListNode＊ m_pNext;
    };

    void DeleteNode（ListNode＊＊ pListHead, ListNode＊ pToBeDeleted）;
 */

interface IListNode {
    value: number;
    next: IListNode;
}
class ListNode implements IListNode {
    value: number;
    next: ListNode;
    constructor(value: number, next?: IListNode) {
        this.value = value;
        if (next) {
            this.next = next;
        }
    }
    toString() {
        return this.value + ' -> ' + (this.next ? this.next.toString() : '');
    }
}

export function deleteNode(head: IListNode, pToBeDeleted: IListNode): void {
    if (head === undefined || head === null || head.next === null) {
        return;
    }
    while (head.next !== undefined) {
        if (head.next.value === pToBeDeleted.value) {
            const to = head.next;
            head.next = to.next;
            break;
        } else {
            head = head.next;
        }
    }
}

function deleteNodeO0(head: any, pToBeDeleted: any): void {
    if (pToBeDeleted === undefined || head === undefined) {
        return;
    }
    if (pToBeDeleted.next !== undefined) {
        let next = pToBeDeleted.next;
        pToBeDeleted.value = next.value;
        pToBeDeleted.next = next.next;
    } else if (head === pToBeDeleted) {
        // delete next;
        // delete pToBeDeleted;
        // console.log('head === pToBeDeleted');
        head.value = -1;
    } else {
        deleteNode(head, pToBeDeleted);
    }
}

function main() {
    test();
}

function test() {
    const head = new ListNode(1);
    const a = new ListNode(2)
    head.next = a;
    const b = new ListNode(3);
    a.next = b;
    const c = new ListNode(10);
    b.next = c;

    const d = new ListNode(5);
    c.next = d;

    const e = new ListNode(20);

    
    console.log(head.toString());
    deleteNode(head, e);
    console.log(head.toString());
    deleteNodeO0(head, c);
    console.log(head.toString());
    deleteNodeO0(e, e);
    console.log(e);

}

main();