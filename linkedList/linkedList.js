// 这种数据结构有一个缺点:(在大多数语言中)数组的大小是固定的，
// 从数组的起点或中间插入 或移除项的成本很高，
// 因为需要移动元素(尽管我们已经学过的JavaScript的Array类方法可以帮 我们做这些事，但背后的情况同样是这样)
// 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。
// 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成。
// 相比于数组：链表增加或移除元素时不需要移动其他元素的相对位置。但若访问元素必须从头进行迭代
// LinkedList类也有存储列表项的数量的length属性(内部/私有变量)(行{2})
// 另一个重要的点是，我们还需要存储第一个节点的引用
// 为此，可以把这个引用存储在一个 称为head的变量中(行{3})
function LinkedList() {
  var Node = function(element) { // {1}
    this.element = element;
    this.next = null;
  };
  var length = 0; // {2}
  var head = null; // {3}
  this.append = function(element) {
    var node = new Node(element), //{1}
      current; //{2}
    if (head === null) { //列表中第一个节点 //{3}
      head = node;
    } else {
      current = head; //{4}
      //循环列表，直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      //找到最后一项，将其next赋为node，建立链接
      current.next = node; //{5}
    }
    length++; //更新列表的长度 //{6}
  };
  this.insert = function(position, element) {};
  this.removeAt = function(position) {};
  this.remove = function(element) {};
  this.indexOf = function(element) {};
  this.isEmpty = function() {};
  this.size = function() {};
  this.toString = function() {
    var current = head, //{1}
      string = ''; //{2}
    while (current) { //{3}
      string = current.element; //{4}
      current = current.next; //{5}
    }
    return string; //{6}
  };
  this.print = function() {};
}

var list = new LinkedList();
list.append(15);
list.append(10);
