//*** every and some
var isEven = function (x) {
    // returns true if x is a multiple of 2.
    console.log(x);
    return (x % 2 == 0) ? true : false;
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// every方法会迭代数组中的每个元素，直到返回false
numbers.every(isEven); //is going to execute the function only once

console.log('---');

// some方法会迭代数组的每个元 素，直到函数返回true
numbers.some(isEven); //is going to execute the function twice
