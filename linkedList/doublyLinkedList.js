// 双向链表提供了两种迭代列表的方法:从头到尾，或者反过来。
// 这是他们相对于单向列表的一个优点
// 此外，还有区别于单项链表的地方
// 在 Node类里有prev属性(一个新指针)，在DoublyLinkedList类里也有用来保存对列表最后一 项的引用的tail属性。
function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null; //新增的
  };
  var length = 0;
  var head = null;
  var tail = null; //新增的
  //这里是方法
  this.append = function(element) {

    let node = new Node(element),
      current;

    if (head === null) { // 如果链表中一个元素也没有
      head = node; // 头赋值为 node
      tail = node; // 尾也赋值为 node
    } else {

      // 如果第一个元素已经存在
      tail.next = node; // 链表的尾巴后面连接新加入元素
      node.prev = tail; // 新加入元素的前面连接上一个元素
      tail = node; // 尾巴赋值为新加入的元素
    }

    length++; //更新链表长度
  };

  this.insert = function(position, element) {

    // insert 方法在特定位置加入元素，都要先检查元素是否越界
    if (position >= 0 && position <= length) {

      let node = new Node(element),
        current = head, // 先得到头部指针
        previous, // 用来记录上一个的位置
        index = 0;

      if (position === 0) { //add on first position

        if (!head) { //NEW 这里为了加上 tail，所以有了这个选择，如果 head 不存在，就更新加上 tail
          head = node;
          tail = node;
        } else {
          // 否则双向关联指针
          node.next = current; // 通过 current 访问到 node
          current.prev = node; //NEW {1}
          // 更新 head
          head = node; // 它的 next 已经在上面设置
        }

      } else if (position === length) { //last item //NEW

        current = tail; // {2}
        // 双向关联，谁指向谁，画个图其实就一目了然
        current.next = node;
        node.prev = current;
        tail = node;

      } else {
        while (index++ < position) { //{3}
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node; //NEW
        node.prev = previous; //NEW
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

      let current = head, // 用 current 来储存将要操作的元素
        previous, // previous 和 next 来连接链表中的元素，作为指针
        index = 0; // index 从零开始，可以在下面将 previous 赋值为 current 也就是 head

      //removing first item
      if (position === 0) {
        head = current.next;
      } else {
        // 首先要找到那个元素
        // 把那个元素删掉
        while (index++ < position) {

          previous = current; // 一次循环之后 previous 变成 current,而且 previous 是从第一个元素 head 开始的
          current = current.next; // current 变成下个 元素
        }

        //link previous with current's next - skip it to remove
        previous.next = current.next; // 通过解除指针链接来删除元素，上一个元素的指针链接直接和下一个元素，下个元素的指针也直接指向上个元素
      }

      length--; // 更新长度

      return current.element;

    } else {
      return null;
    }
  };

  this.toString = function() {
    // 基本分析思路都是如果有一个元素或有多个元素应该怎么样
    // 如果一个元素也没有就不用输出
    // 如果有一个就输出一个
    // 有多个元素就用循环输出
    let current = head,
      string = current ? current.element : '';

    while (current && current.next) {
      current = current.next;
      string += ', ' + current.element;
    }

    return string;
  };

  this.print = function() {
    console.log(this.toString());
  };

  this.printInverse = function() {
    console.log(this.inverseToString());
  };

  this.getHead = function() {
    return head;
  };

  this.getTail = function() {
    return tail;
  }

}

let list = new DoublyLinkedList();
list.append(10);
list.append(15);
console.log(list.toString()); // 1510100
