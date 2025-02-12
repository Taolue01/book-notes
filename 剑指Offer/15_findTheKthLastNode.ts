/**
 * 题目：输入一个链表，输出该链表中倒数第 k 个结点。
 * 为了符合大多数人的习惯，本题从1 开始计数，即链表的尾结点是倒数第1 个结点。
 * 例如一个链表有6个结点，从头结点开始它们的值依次是1、2、3、4、5、6。
 * 这个链表的倒数第3个结点是值为4的结点。
 * 
 *  struct ListNode
    {
        int       m_nValue;
        ListNode＊ m_pNext;
    };
 */
interface INumber {
    EPSILON: any;
    MAX_SAFE_INTEGER: any; // 9007199254740991
}
declare var Number: INumber;
const TEST = true;

interface ListNode {
    m_nValue: number;
    m_pNext: ListNode;
}

class FKNode implements ListNode {
    m_nValue: number;
    m_pNext: ListNode;
    constructor(value: number, previous?: ListNode, next?: ListNode) {
        this.m_nValue = value;
        if (previous) {
            previous.m_pNext = this;
        }
        if (next) {
            this.m_pNext = next;
        }
    }

    toString() {
        return this.m_nValue + ' -> ' + (this.m_pNext ? this.m_pNext.toString() : '');
    }
}

/** 
 * 解法一 
 * 我们需要遍历链表两次，第一次统计出链表中结点的个数，第二次就能找到倒数第 k 个结点。
*/
export function findKth(root: ListNode, k: number): number {
    let result = Number.MAX_SAFE_INTEGER;
    if (root !== undefined || root !== null) {
        let count = 0;
        let node = root;
        while (true) {
            count += 1;
            node = node.m_pNext;
            if (node.m_pNext === undefined) {
                break;
            }
        }
        let index = count - k + 1;
        if (index >= 0) {
            node = root;
            for (let i = 0; i < index; i++) {
                node = node.m_pNext;
            }
            result = node.m_nValue;
        }


    } 
    return result;
}

/**
 * 解法二
 * 为了实现只遍历链表一次就能找到倒数第 k 个结点，我们可以定义两个指针。
 * 第一个指针从链表的头指针开始遍历向前走k-1，第二个指针保持不动；
 * 从第 k 步开始，第二个指针也开始从链表的头指针开始遍历。
 * 由于两个指针的距离保持在k-1，当第一个（走在前面的）指针到达链表的尾结点时，
 * 第二个指针（走在后面的）指针正好是倒数第k个结点。
 */
export function findKthLastNode(root: ListNode, k: number): number {
    let result = Number.MAX_SAFE_INTEGER;
    if (root !== undefined || root !== null) {
        let node = root;
        let index = 0;
        let r_node;
        while (true) {
            index += 1;

            if (index > (k - 1)) {
                r_node = r_node ? r_node.m_pNext : root;
            }
            
            node = node.m_pNext;
            if (node?.m_nValue === undefined) {
                break;
            }
        }
        if (index >= k) {
            result = r_node.m_nValue;
        }
    }

    return result;
}

export function findKthLastNode2(root: ListNode, k: number): number {
    let pAHead: ListNode = root, pBehind: ListNode;
    let result = Number.MAX_SAFE_INTEGER, r = false;
    for (let i = 0; i < k - 1; i++) {
        if (pAHead.m_pNext !== undefined) {
            pAHead = pAHead.m_pNext;
        } else {
            r = true; 
            break;
        }
    }
    if (r === false ) {
        pBehind = root;
        while(pAHead.m_pNext !== undefined) {
            pBehind = pBehind.m_pNext;
            pAHead = pAHead.m_pNext;
        }

        result = pBehind.m_nValue;
    }

    return result;
}

function main() {
    if (TEST) {
        test();
    }
}

function test() {
    const root = new FKNode(1);
    const a = new FKNode(10, root);
    const b = new FKNode(11, a);
    const c = new FKNode(15, b);
    const d = new FKNode(19, c);
    const e = new FKNode(100, d);
    const f = new FKNode(109, e);
    const g = new FKNode(100000, f);
    const h = new FKNode(0, g);

    console.log(root.toString());

    console.log('find Kth result is: ',findKth(root, 2));
    console.log('find Kth result is: ',findKth(root, 6));
    console.log('find Kth result is: ',findKth(root, 9), 9);
    console.log('find Kth result is: ',findKth(root, 10), 10);


    
    console.log('find Kth Last Node result is: ',findKthLastNode(root, 2));
    console.log('find Kth Last Node result is: ',findKthLastNode(root, 6));
    console.log('find Kth Last Node result is: ',findKthLastNode(root, 9), 9);
    console.log('find Kth Last Node result is: ',findKthLastNode(root, 10), 10);

    const root_a = new FKNode(1);
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 1));
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 6));
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 9), 9);
    // console.log('find Kth Last Node result is: ',findKthLastNode(root_a, 10), 10);


    console.log('find Kth Last Node result is: ',findKthLastNode2(root, 0));
    console.log('find Kth Last Node result is: ',findKthLastNode2(root, 6));
    console.log('find Kth Last Node result is: ',findKthLastNode2(root, 9), 9);
    console.log('find Kth Last Node result is: ',findKthLastNode2(root, 10), 10);



}

main();


