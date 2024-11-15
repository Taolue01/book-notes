
# 链表 linked list 
import sys

max_size = sys.maxsize
min_size = -sys.maxsize - 1

class LinkedNode:
    nodeValue = min_size
    nodeNext = None
    def __init__(self):
        pass

    def __str__(self):
        return self.printLinkedNode().strip()
        

    def printLinkedNode(self):
        other = ''
        if (self.nodeNext != None):
            other = self.nodeNext.printLinkedNode()
        return other + ' ' + str(self.nodeValue)



# 添加接点
def addNode(head: LinkedNode, value) -> LinkedNode:
    result = head

    newNode = LinkedNode()
    newNode.nodeValue = value


    if (head != None):
        node = head
        while(node.nodeNext != None):
            node = node.nodeNext
        node.nodeNext = newNode
    else:
        result = newNode
    return result

# 删除接点
def removeNode(head: LinkedNode, value):
    if (head != None):
        node = head
        toBeDelete = None
        
        while(node.nodeNext != None):
            if (node.nodeNext.nodeValue == value):
                toBeDelete = node.nodeNext
                node.nodeNext = toBeDelete.nodeNext
                break
            node = node.nodeNext
        return head


# 测试
def test():
    linkedList = LinkedNode()
    linkedList.nodeValue = 10
    linkedList = addNode(linkedList, 32)
    linkedList = addNode(linkedList, 12)
    linkedList = addNode(linkedList, 100)
    linkedList = addNode(linkedList, 10)
    linkedList = addNode(linkedList, 12)
    linkedList = addNode(linkedList, 18)
    linkedList = addNode(linkedList, 22)
    print(linkedList)

    # remove node
    linkedList = removeNode(linkedList, 12)
    print(linkedList)


if (__name__ == '__main__'):
    test()

