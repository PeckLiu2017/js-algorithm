// 数组(列表)、栈、队列和链表(及其变种)都是有顺序的数据结构
// 集合是由一组无序且唯一(即不能重复)的项组成的

function Set() {
  var items = {};

  // this.has = function(value) {
  //   return value in items;
  // };

  // 所有JavaScript对象都有hasOwnProperty方法。这个方法返回一个表明对象是否具有特定属性的布尔值
  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value; //{1}
      return true;
    }
    return false;
  };

  this.delete = function(value) {
    if (this.has(value)) {
      delete items[value]; // items = {1:'1',2:'2',3:'3'};  delete items[1] 得到 => {2: "2", 3: "3"}
      return true;
    }
    return false;
  };

  this.print = function() {

  }

  this.clear = function() {
    items = {}; // {3}
  };

  // 只能在现代浏览器中运行(比如IE9以上版本、Firefox 4以上版本、Chrome 5以上版本、Opera 12以 上版本、Safari 5以上版本，等等)。
  this.size = function() {
    return Object.keys(items).length; //{4}
    // Object.keys(items) ["1", "2", "3"]
  };

  // 只能在现代浏览器中运行(比如IE9以上版本、Firefox 4以上版本、Chrome 5以上版本、Opera 12以 上版本、Safari 5以上版本，等等)。
  this.values = function() {
    return Object.keys(items);
  };

  // 手动提取items对象的每一个属性，记录属性的个数并返回这个数字。
  this.sizeLegacy = function() {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key))
        ++count;
    }
    return count;
  };

  // 手动提取items对象的每一个属性，记录属性的个数并返回这个数字。
  this.valuesLegacy = function() {
    var keys = [];
    for (var key in items) { //{7}
      keys.push(key); //{8}
    }
    return keys;
  };
}

let set = new Set();

set.add(1);
console.log(set.values()); //outputs [1]
console.log(set.has(1));   //outputs true
console.log(set.size());   //outputs 1

set.add(2);
console.log(set.values()); //outputs [1, 2]
console.log(set.has(2));   //true
console.log(set.size());   //2
console.log(set.sizeLegacy());   //2

set.delete(1);
console.log(set.values()); //outputs [ '2' ]

set.delete(2);
console.log(set.values()); //outputs []
