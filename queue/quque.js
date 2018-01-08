// 创建队列
// 队列先进先出
function Queue() { //这里是属性和方法
  var items = [];
  this.enqueue = function(element) {
    items.push(element);
  };
  // 删除队列开头的元素
  this.dequeue = function() {
    return items.shift();
  };
  this.front = function() {
    return items[0];
  };
  this.isEmpty = function() {
    return items.length == 0;
  };
  this.size = function() {
    return items.length;
  };
  this.print = function() {
    console.log(items.toString());
  };
}
