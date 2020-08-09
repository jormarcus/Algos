function bstInOrderTraversal(root) {
  const inOrder = [];
  const treeNodes = [];

  if (!root) {
    return inOrder;
  }

  while (root || treeNodes.length > 0) {
    // push left children if available
    while (root) {
      treeNodes.push(root);
      root = root.left;
    }

    // retrieve top node and store its right child if exists 
    root = treeNodes.pop();

    inOrder.push(root.val);
    root = root.right;
  }

  return inOrder;
}

module.exports = bstInOrderTraversal;