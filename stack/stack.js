function Stack() { //各种属性和方法的声明
  var items = [];
  // 该方法只添加元素到栈顶，也就是栈的末尾
  this.push = function(element) {
    items.push(element);
  };
  // 删除栈顶的元素
  this.pop = function() {
    return items.pop();
  };
  // 显示栈里最后添加的元素是什么
  this.peek = function() {
    return items[items.length - 1];
  };
  // 判断栈是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };
  // 返回栈的长度
  this.size = function() {
    return items.length;
  };
  // 清空栈里的所有元素
  this.clear = function() {
    items = [];
  };
  // 将栈里所有的元素都输出到控制台
  this.print = function() {
    console.log(items.toString());
  };
}


var stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(5);
stack.push(8);
console.log(stack.peek()); //输出 8

stack.push(11);
console.log(stack.size()); //输出3
console.log(stack.isEmpty()); //输出false

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); //输出2
stack.print(); //输出 5, 8
