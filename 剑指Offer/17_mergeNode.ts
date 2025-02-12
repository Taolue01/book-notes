/**
 * 题目：输入两个递增排序的链表，合并这两个链表并使新链表中的结点仍然是按照递增排序的。
 * 例如输入图3.7中的链表1和链表2，则合并之后的升序链表如链表3所示。链表结点定义如下：
 *     struct ListNode
    {
        int      m_nValue;
        ListNode＊ m_pNext;
    };
 */
export function mergeListNode(node1: IMListNode, node2: IMListNode): IMListNode {
    if (node1 === undefined) {
        return node2;
    } else if (node2 === undefined) {
        return node1;
    } 
    let mergedHead; 
    if (node1.m_nValue < node2.m_nValue) {
        mergedHead = node1;
        mergedHead.m_pNext = mergeListNode(node1.m_pNext, node2);
    } else {
        mergedHead = node2;
        mergedHead.m_pNext = mergeListNode(node1, node2.m_pNext);
    }

    return mergedHead;
}

const TEST = true; 

interface IMListNode {
    m_nValue: number;
    m_pNext: IMListNode;
    toString: () => string;
}

class MListNode implements IMListNode {
    m_nValue: number;
    m_pNext: IMListNode;
    constructor(value: number, next?: IMListNode) {
        this.m_nValue = value;
        if (next) {
            this.m_pNext = next;
        }
    }

    toString() {
        let result = '' + this.m_nValue;
        if (this.m_pNext) {
            result += ' -> ' + this.m_pNext.toString();
        }
        return result;
    }
}

function main() {
    if (TEST) {
        test();
    }
}

function test() {
    let list1 = [1, 3, 5, 7, 8];
    let list2 = [2, 3, 6, 7, 9];
    let nodelist1 = createList(list1);
    let nodelist2 = createList(list2);
    console.log('node list ', nodelist1.toString(), nodelist2.toString());
    console.log(' merge result', mergeListNode(nodelist1, nodelist2).toString());

    let nodelist3: IMListNode = new MListNode(10);
    console.log(' merge result', mergeListNode(createList(list1), nodelist3).toString());


}

function createList(values: number[]) {
    let previous;
    for (let index = values.length - 1; index >= 0; index--) {
        const temp = new MListNode(values[index], previous);
        previous = temp;
    }
    return previous;
}

main();