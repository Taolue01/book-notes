/**
 * 题目：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 * 链表结点定义如下：
 * 
 *     struct ListNode
    {
        int       m_nKey;
        ListNode＊ m_pNext;
    };
 * 
 */
const TEST = true;
interface IRNode {
    m_nKey: number;
    m_pNext: RNode;
}
class RNode implements IRNode {
    m_nKey: number;
    m_pNext: RNode;
    constructor(value: number, previous?: IRNode, next?: IRNode) {
        this.m_nKey = value;
        if (previous) {
            previous.m_pNext = this;
        }
        if (next) {
            this.m_pNext = next;
        }
    }

    toString() {
        return this.m_nKey + ' -> ' + (this.m_pNext ? this.m_pNext.toString() : '');
    }
}

export function reverseNode(root: IRNode): IRNode {
    let result: any = root;
    if (result !== undefined || result.m_pNext !== undefined) {
        let node = root, 
        reverseHead,
        previous;
        while (node !== undefined) {
            let next = node.m_pNext;
            if (next === undefined) {
                reverseHead = node;
            }

            node.m_pNext = previous
            previous = node;
            node = next;
        }
        result = reverseHead;
    }
    return result;
}

function main() {
    if (TEST) {
        test();
    }
}

function test() {
    const root = new RNode(1);
    const a = new RNode(10, root);
    const b = new RNode(11, a);
    const c = new RNode(15, b);
    const d = new RNode(19, c);
    const e = new RNode(100, d);
    const f = new RNode(109, e);
    const g = new RNode(100000, f);
    const h = new RNode(0, g);

    console.log(root.toString());
    console.log('reverse nodes :', reverseNode(root).toString());
}

main();