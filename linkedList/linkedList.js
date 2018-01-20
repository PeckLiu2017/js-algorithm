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

  this.insert = function(position, element) {

    //check for out-of-bounds values
    if (position >= 0 && position <= length) {

      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) { //add on first position

        node.next = current;
        head = node;

      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++; //update size of list

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

      //removing first item
      if (position === 0) {
        head = current.next;
      } else {

        while (index++ < position) {

          previous = current;
          current = current.next;
        }

        //link previous with current's next - skip it to remove
        previous.next = current.next;
      }

      length--;

      return current.element;

    } else {
      return null;
    }
  };
  this.remove = function(element) {

    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function(element) {
    let current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  this.isEmpty = function() {
    return length === 0; // 这里不用 if
  };
  this.size = function() {
    return length;
  };
  this.toString = function() {
    let current = head, //{1}
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
console.log(list.toString());
console.log(list.size());
console.log(list.isEmpty());
console.log(list.indexOf(10));
console.log(list.indexOf(15));
console.log(list.indexOf(100));
