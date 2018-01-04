/* 把元素插入数组的开头 */
// 方法一：
var numbers = [0,1,2,3,4,5,6,7,8,9];

for (var i = numbers.length-1; i > 0; i--) {
  numbers[i] = numbers[i-1]
}
numbers[0] = -1;

// 方法二：
// numbers.unshift(-1);
console.log(numbers);

/* 把元素插入数组的结尾 */
var numbers = [0,1,2,3,4,5,6,7,8,9];
// 方法一：
numbers.push(10);
// 方法二：
numbers[numbers.length] = 10;
