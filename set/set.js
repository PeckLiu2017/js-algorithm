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

  this.union = function(otherSet) {
    let unionSet = new Set(); //{1} 首先需要创建一个新的集合，代表两个集合的并集

    let values = this.values(); //{2} 接下来，获取第一个集合(当 前的Set类实例)所有的值(values)，遍历并全部添加到代表并集的集合中
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values(); //{3} 然后对第二个集合做同样的事(行{3})。最后返回结果。
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  this.intersection = function(otherSet) {
    let intersectionSet = new Set(); //{1}

    let values = this.values();
    for (let i = 0; i < values.length; i++) { //{2}
      if (otherSet.has(values[i])) { //{3}
        intersectionSet.add(values[i]); //{4}
      }
    }

    return intersectionSet;
  }

  this.difference = function(otherSet) {
    let differenceSet = new Set(); //{1} setA.difference(setB)

    let values = this.values();
    for (let i = 0; i < values.length; i++) { //{2} 从 A 中取元素，所以遍历 A,也因为 setA.union(setB)
      if (!otherSet.has(values[i])) { //{3}
        differenceSet.add(values[i]); //{4}
      }
    }

    return differenceSet;
  };

  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) { //{1}
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) { //{2}
        if (!otherSet.has(values[i])) { //{3}
          return false; //{4}
        }
      }
      return true;
    }
  };
}

let set = new Set();

set.add(1);
console.log(set.values()); //outputs [1]
console.log(set.has(1)); //outputs true
console.log(set.size()); //outputs 1

set.add(2);
console.log(set.values()); //outputs [1, 2]
console.log(set.has(2)); //true
console.log(set.size()); //2
console.log(set.sizeLegacy()); //2

set.delete(1);
console.log(set.values()); //outputs [ '2' ]

set.delete(2);
console.log(set.values()); //outputs []

//--------- Union ----------

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
//
// let setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
//
// let unionAB = setA.union(setB);
// console.log(unionAB.values());

//--------- Intersection ----------

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
//
// let setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
//
// let intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());

//--------- Difference ----------

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
//
// let setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
//
// let differenceAB = setA.difference(setB);
// console.log(differenceAB.values());

//--------- Subset ----------

let setA = new Set();
setA.add(1);
setA.add(2);

let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

let setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.subset(setB));
console.log(setA.subset(setC));
