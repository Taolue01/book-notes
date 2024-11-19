function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
} 

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


function main() {
    let preorder = [1,2,4,7,3,5,6,8];
    let inorder = [4,7,2,1,5,3,8,6];

    preorder = [1, 2, 3];
    inorder = [2, 3, 1];

    let treenode = buildTree(preorder, inorder);
    console.log(treenode);
}

if (require.main == module) {
    main();
}