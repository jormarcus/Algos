function isValidBST(root) {
  if (!root) {
    return null;
  }

  const stack = [];
  let prev = null;

  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (prev && prev.val >= root.val) {
      return false;
    }

    prev = root;
    root = root.right;
  }

  return true;
}