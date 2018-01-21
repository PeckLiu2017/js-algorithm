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
  let Node = function(element) { // {1}
    this.element = element;
    this.next = null;
  };
  let length = 0; // {2}
  let head = null; // {3}

  this.append = function(element) {

    let node = new Node(element),
      current; // 指向列表中 current项的变量

    if (head === null) { //如果链列表中没有节点
      head = node; // 把它赋值为 head
    } else {

      current = head;

      //loop the list until find last item
      while (current.next) {
        current = current.next; // 当current.next元素为null时，我们就知道当前已经到达列表尾部了
      }

      //get last item and assign next to added item to make the link
      current.next = node; // 然后要做的就是让当前(也就是最后一个)元素的next指针指向想要添加到列表的节点,也就是将新元素加入链表
    }

    length++; //更新列表的长度
  };

  // 这里画一个链表的图比较简单易懂些
  this.insert = function(position, element) {

    //check for out-of-bounds values
    if (position >= 0 && position <= length) {

      let node = new Node(element),
        current = head, // 先得到头部指针
        previous, // 用来记录上一个的位置
        index = 0;

      if (position === 0) { //add on first position

        node.next = current; // 先储存指针
        head = node; // 再赋值

      } else { // 比如想要在第二个位置加上一个元素
        while (index++ < position) {
          previous = current; // 一开始 previous 变成了 head
          current = current.next; // 移动指针 current 到了索引为 1 的地方，值为 null
        }
        node.next = current; // 先储存指针
        previous.next = node; // 再赋值
      }

      length++; //更新列表的长度

      return true;

    } else {
      return false;
    }
  };

  this.removeAt = function(position) {

    //check for out-of-bounds values
    if (position > -1 && position < length) {

      let current = head,
        previous,
        index = 0;
        // current = head, previous = undefined, index = 0

      //如果是第一个元素，就移除第一个
      if (position === 0) {
        head = current.next;
      } else {
        // 如果不是，就用 index++ 取下一个元素
        while (index++ < position) {

          previous = current; // 一开始 previous 变成了 head，随后是不同值的 current
          current = current.next;
        }

        // 把 current.next 变成了 previous.next
        previous.next = current.next;
      }

      length--; // 减小链表长度

      return current.element;

    } else {
      return null;
    }
  };
  this.remove = function(element) {
    // 先找到索引，然后根据元素的索引删除元素
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function(element) {
    let current = head,
      index = 0;

    while (current) {
      if (element === current.element) { // 如果元素在链表头部，直接返回的 index 为 0
        return index;
      }
      index++; // 否则 index++
      current = current.next; // 移动指针
    }
    return -1; // 找不到的话返回 -1
  };
  this.isEmpty = function() {
    return length === 0; // 这里不用 if
  };
  this.size = function() {
    return length;
  };
  this.toString = function() {
    let current = head, // 先得到头部指针
      string = ''; //{2}
    while (current) { //{3}
      string += current.element; //{4}
      current = current.next; //{5}
    }
    return string; //{6}
  };
  this.print = function() {};
}

let list = new LinkedList();
list.append(15);
list.append(10);
list.append(100);
console.log(list.toString()); // 1510100
console.log(list.size()); // 3
console.log(list.isEmpty()); // false
console.log(list.indexOf(10)); // 1
console.log(list.indexOf(15)); // 0
console.log(list.indexOf(100)); // 2
list.removeAt(0);
console.log(list.toString()); // 10100
