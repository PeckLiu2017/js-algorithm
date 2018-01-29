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

  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };


}

let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

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
