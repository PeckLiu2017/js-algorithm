//*** every and some
var isEven = function (x) {
    // returns true if x is a multiple of 2.
    console.log(x);
    return (x % 2 == 0) ? true : false;
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// every方法会迭代数组中的每个元素，直到返回false
// numbers.every(isEven); //is going to execute the function only once

console.log('---');

// some方法会迭代数组的每个元 素，直到函数返回true
// numbers.some(isEven); //is going to execute the function twice

// forEach 迭代
// numbers.forEach(function (number) {
//   console.log((number % 2 == 0));
// });

// map 方法返回新数组，新数组是函数 isEven 的运算结果：
// var myMap = numbers.map(isEven);
// console.log(myMap);

// filter 方法返回新数组，它返回的新数组由使函数返回true的元素组成：
// var evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// reduce 函数会返回一个将被叠加到累加器的值，reduce方法停止执行后会返回这个累加器。
sum = numbers.reduce(function(previous, current, index){
        return previous + current;
});
console.log(sum);
