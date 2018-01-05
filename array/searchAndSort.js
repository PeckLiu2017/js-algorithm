var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/* 反序输出数组numbers */
// console.log(numbers.reverse());

// sort方法在对数组做排序时，把元素默认成字符串进行相 互比较
// JavaScript的sort方法接受 compareFunction 作为参数，然后 sort 会用它排序数组
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);


/* 自定义排序 */
// 按年龄排序
// var friends = [{
//     name: 'John',
//     age: 30
//   }, {
//     name: 'Ana',
//     age: 20
//   },
//   {
//     name: 'Chris',
//     age: 25
//   }
// ];

// function comparePerson(a, b) {
//   if (a.age < b.age) {
//     return -1
//   }
//   if (a.age > b.age) {
//     return 1
//   }
//   return 0;
// }
// console.log(friends.sort(comparePerson));
// friends.sort(function (a,b) {
//   return a.age - b.age;
// });
// console.log(friends);

/* 字符串排序 */
// JavaScript在做字符比较 的时候，是根据字符对应的ASCII值来比较的
// A、J、a、j对应的ASCII值分别是65、75、 7、106
// 所以结果如下所示
var names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort()); //["Ana", "John", "ana", "john"]

names.sort(function(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
});

console.log(names); //["Ana", "John", "ana", "john"]

// 对带有重音符号的字符做排序的话，我们可以用localCompare来实现:
var names2 = ['Maève', 'Maeve'];
console.log(names2.sort(function(a, b) {
  return a.localeCompare(b);
}));
// ["Maeve", "Maève"]

/* 搜索 */
console.log(numbers.indexOf(10)); // 第一行的输出是9
console.log(numbers.indexOf(100)); // 第二行的输出是1(因为100不在数组里)
