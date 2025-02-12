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

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
} 

/**
 * 所有时间 61ms 
 * 内存 125.39m
*/
var buildTree = function(preorder, inorder) {
    if (preorder == null || inorder == null || preorder.length !== inorder.length || preorder.length === 0) {
        return null;
    }
    let rootValue = preorder[0];
    let root = new TreeNode(rootValue);
    let offset = 0;
    let length = preorder.length;

    inorder.some((nodeValue, index) => {
        if (nodeValue === rootValue) {
            offset = index;
            return true;
        }
        return false;
    });

    if (preorder.length > 1) {
        root.left = buildTree(preorder.slice(1, offset + 1), inorder.slice(0, offset));
        root.right = buildTree(preorder.slice(offset + 1, length), inorder.slice(offset + 1, length));
    }

    return root;
};

/** 
 * This implementation is the better compared to buildTree(时间更快 所占内存更小)
 * 使用时间：15ms
 * 使用内存：57.70m
 */
var buildTree2 = function(preorder, inorder) {
    if (preorder == null || inorder == null || preorder.length !== inorder.length || preorder.length === 0) {
        return null;
    }

    let rootValue = preorder[0];
    let root = new TreeNode(rootValue);
    let offset = 0;

    inorder.some((nodeValue, index) => {
        if (nodeValue === rootValue) {
            offset = index;
            return true;
        }
        return false;
    });

    if (preorder.length > 1) {
        let leftPreorder = preorder.splice(1, offset);
        let leftInorder = inorder.splice(0, offset);

        inorder.splice(0, 1);
        preorder.splice(0, 1);

        root.left = buildTree2(leftPreorder, leftInorder);
        root.right = buildTree2(preorder, inorder);
    }

    return root;
}

/** 
 * 运行时间：8ms
 * 消耗内存：53.60m
*/
var buildTree3 = function(preorder, inorder) {
    if (preorder == null || inorder == null || preorder.length !== inorder.length) {
        return null;
    }

    let startPreorder = 0, startInorder = 0;
    let endInorder = preorder.length - 1;
    let endPreorder = endInorder;
    return buildeNode(preorder, startPreorder, endPreorder, inorder, startInorder, endInorder);
}

var buildeNode = function(preorder, startPreorder, endPreorder, inorder, startInorder, endInorder) {
    if (startPreorder > endPreorder) {
        return null;
    }

    let rootValue = preorder[startPreorder];
    let root = new TreeNode(rootValue);
    let offset = 0;


    for (offset = 0; startInorder + offset <= endInorder; offset++){
        if (inorder[startInorder + offset] === rootValue) {
            break;
        } 
    }
    

    if (offset === 0) {
        root.right = buildeNode(preorder, startPreorder + offset + 1, endPreorder, inorder, startInorder + offset + 1, endInorder);
    } else if (startInorder + offset === endInorder) {
        root.left = buildeNode(preorder, startPreorder + 1, startPreorder + offset, inorder, startInorder, startInorder + offset - 1);
    } else {
        root.left = buildeNode(preorder, startPreorder + 1, startPreorder + offset, inorder, startInorder, startInorder + offset - 1);
        root.right = buildeNode(preorder, startPreorder + offset + 1, endPreorder, inorder, startInorder + offset + 1, endInorder);
    }

    return root;
}

/** 
 * 
 * 
*/
var buildTree4 = function(preorder, inorder) {
    const index=new Map();
    const n=inorder.length;
    for(let i=0;i<n;i++){
        index.set(inorder[i],i);
    }
    console.log('map :', index);
    const mybuildtree=(preorder,inorder,pre_left,pre_right,in_left,in_right)=>{
        if(pre_left>pre_right){
            return null;
        }
        let pre_root=pre_left;
        let in_root=index.get(preorder[pre_root]);
        const left_size=in_root-in_left;
        const root=new TreeNode(preorder[pre_root]);
        root.left=mybuildtree(preorder,inorder,pre_left+1,pre_left+left_size,in_left,in_root-1);
        root.right=mybuildtree(preorder,inorder,pre_left+left_size+1,pre_right,in_root+1,in_right);
        return root;

    }
    return mybuildtree(preorder,inorder,0,n-1,0,n-1);

};


function main() {
    let preorder = [1,2,4,7,3,5,6,8];
    let inorder = [4,7,2,1,5,3,8,6];

    // preorder = [1, 2, 3];
    // inorder = [2, 3, 1];

    // preorder = [4, 7];
    // inorder = [4, 7];

    let treenode = buildTree4(preorder, inorder);
    console.log(treenode);
}

if (require.main == module) {
    main();
}