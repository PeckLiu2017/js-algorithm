function Map() {

  var items = {};

  this.has = function(key) {
    return key in items;
  }

  this.delete = function(key) {
    // 删除的时候先进行非空验证
    if (this.has(key)) {
      delete items[key]; // 删除
      return true;
    }
    return false;
  }

  this.set = function(key, value) {
    items[key] = value;
  };

  this.get = function(key) {
    return this.has(key) ? items[key] : undefined; // get 也要非空验证
  }

  this.values = function() {
    var values = [];
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };

  this.clear = function() {
    items = {};
  };

  this.size = function() {
    return Object.keys(items).length;
  };

  this.keys = function() {
    return Object.keys(items);
  };

  this.each = function(fn) {
    for (var k in items) {
      if (this.has(k)) {
        fn(k, items[k]);
      }
    }
  };

  this.getItems = function() {
    return items;
  }
}

let map = new Map();

map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has('Gandalf'));   //outputs true
console.log(map.size());   //outputs 3

console.log(map.keys()); //outputs ["Gandalf", "John", "Tyrion"]
console.log(map.values()); //outputs ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(map.get('Tyrion')); //outputs tyrion@email.com

map.delete('John');

console.log(map.keys()); //outputs ["Gandalf", "Tyrion"]
console.log(map.values()); //outputs ["gandalf@email.com", "tyrion@email.com"]

console.log(map.getItems()); //Object {Gandalf: "gandalf@email.com", Tyrion: "tyrion@email.com"}
