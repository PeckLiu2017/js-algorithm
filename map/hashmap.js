// 你已经知道如果 要在数据结构中获得一个值(使用get方法)，需要遍历整个数据结构来找到它。如果使用散列 函数，就知道值的具体位置，因此能够快速检索到该值。
// 对于HashTable类来说，我们不需要像ArrayList类一样从table数组中将位置也移除。
function HashMap() {
  let table = [];

  let loseloseHashCode = function(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  // 我们实现的“lose lose”散列函数并不是一个表现良好的散列函数，因为它会产生太多的冲突。
  // 如果我们使用这个函数的话，会产生各种各样的冲突。
  // 一个表现良好的散列函数是由几个方 面构成的:插入和检索元素的时间(即性能)，当然也包括较低的冲突可能性。

  let djb2HashCode = function(key) {
    let hash = 5381; //{1}
    for (let i = 0; i < key.length; i++) { //{2}
      hash = hash * 33 + key.charCodeAt(i); //{3}
    }
    return hash % 1013; //{4}
  };

  let hashCode = function(key) {
    //return loseloseHashCode(key);
    return djb2HashCode(key);
  };

  this.put = function(key, value) {
    let position = hashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.get = function(key) {
    return table[hashCode(key)];
  };

  // 由于元素分布于整个数组范围内，一些位置会没有任何元素占据，并默认为undefined值。
  // 我们也 不能将位置本身从数组中移除(这会改变其他元素的位置)，否则，当下次需要获得或移除一个 元素的时候，这个元素会不在我们用散列函数求出的位置上。
  this.remove = function(key) {
    table[hashCode(key)] = undefined;
  };

  this.print = function() {
    for (let i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}

let hash = new HashMap();

hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

console.log('**** Printing Hash **** ');

hash.print();

console.log('**** Get **** ');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));

console.log('**** Remove **** ');

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

console.log('**** Printing Hash **** ');

hash.print();
