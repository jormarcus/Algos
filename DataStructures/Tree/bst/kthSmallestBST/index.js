function kthSmallestBST(root, k) {
  const stack = [];

  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (k-- === 0) {
      return root.val;
    }

    root = root.right;
  }

  return -1;
}

module.exports = kthSmallestBST;