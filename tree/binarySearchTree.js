// 非顺序数据结构——树，它对于存储需要快速查找的数据非常有用
function BinarySearchTree() {
  let Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;

  this.insert = function(key) {

    // 第一步是创建用来表示新节点的Node类实例
    // 只需要向构造函数传递我们想用来插入树的节点值，它的左指针和右指针的值会由构造函数自动设置为null
    let newNode = new Node(key);

    // 如果我们要插入的节点是树的第一个节点(行{2})，就将根节点指向新节点
    if (root === null) {
      root = newNode;
    } else {
      // 将节点加在非根节点的其他位置
      insertNode(root, newNode);
    }
  };

  let insertNode = function(node, newNode) {
    // 如果新节点的键小于当前节点的键(现在，当前节点就是根节点)(行{4})，
    // 那么需要检查当前节点的左侧子节点。如果它没有左侧子节点(行{5})，
    // 就在那里插入新的节点。 如果有左侧子节点，需要通过递归调用insertNode方法(行{7})继续找到树的下一层。
    // 在这里，下次将要比较的节点将会是当前节点的左侧子节点。
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  // 中序遍历
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };

  let inOrderTraverseNode = function(node, callback) {
    if (node !== null) { // 要通过中序遍历的方法遍历一棵树，首先要检查以参数形式传入的节点是否为null(这就是停止递归继续执行的判断条件——递归算法的基本条件
      // 然后，递归调用相同的函数来访问左侧子节点
      inOrderTraverseNode(node.left, callback);
      // 接着对这个节点进行一些操作 (callback)
      callback(node.key);
      // 然后再访问右侧子节点(行{5})
      inOrderTraverseNode(node.right, callback);
    }
  };

  // 先序遍历
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  };

  let preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };

  // 后续遍历
  let postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  // 找最小值
  this.min = function() {
    return minNode(root);
  };

  let minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }
    return null;
  };

  // 找最大值
  this.max = function() {
    return maxNode(root);
  };

  let maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }
    return null;
  };

  // 搜索
  this.search = function(key) {

    return searchNode(root, key);
  };

  let searchNode = function(node, key) {

    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return searchNode(node.left, key);

    } else if (key > node.key) {
      return searchNode(node.right, key);

    } else {
      return true; // 最后返回 true，说明包含这个元素
    }
  };

  // root被赋值为removeNode方法的返回值
  this.remove = function(key) {
    root = removeNode(root, key); //{1}
  };

  let removeNode = function(node, element) {

    if (node === null) {
      return null;
    }

    if (element < node.key) { // 1.键 < node.key
      node.left = removeNode(node.left, element); // 更新了节点左指针的值
      return node; // 更新了节点左右指针的值

    } else if (element > node.key) { // 2.键 > node.key
      node.right = removeNode(node.right, element); // 更新了节点右指针的值
      return node; // 更新了节点左右指针的值

    } else { // 3.键等于node.key

      //第一种情况——一个叶节点
      //给这个节点赋予null值来移除它的指针
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //第二种情况——一个只有一个子节点的节点
      //如果这个节点没有左侧子节点
      //也就是说它有一个右侧子节点
      //因此我们把对它的引用改为对它右侧子节点的引用并返回更新后的节点
      if (node.left === null) {
        node = node.right;
        return node;

      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 第三种情况——一个有两个子节点的节点
      // 当找到了需要移除的节点后，需要找到它右边子树中最小的节点
      let aux = findMinNode(node.right);
      node.key = aux.key;
      // 继续把右侧子树中的最小节点移除，毕竟它已经被移至要移除的节点的位置了
      node.right = removeNode(node.right, aux.key);
      // 最后，向它的父节点返回更新后节点的引用
      return node;
    }
  };

  // 当找到了需要移除的节点后，需要找到它右边子树中最小的节点
  // 用它右侧子树中最小节点的键去更新这个节点的值
  // 通过这一步，我们改变了这个节点的键，也就是说它被移除了

  let findMinNode = function(node) {
    while (node && node.left !== null) {
      node = node.left;
    }

    return node;
  };
}

let tree = new BinarySearchTree();

// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);

tree.insert(4);
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(5);
tree.insert(6);

console.log('********* in-order transverse ***********');

function printNode(value) {
  console.log(value);
}
tree.inOrderTraverse(printNode);

console.log('********* pre-order transverse ***********');
tree.preOrderTraverse(printNode);

console.log('********* post-order transverse ***********');
tree.postOrderTraverse(printNode);

console.log('********* max and min ***********');
console.log(tree.max());
console.log(tree.min());
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
