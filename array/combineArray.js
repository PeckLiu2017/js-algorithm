// 有多个数组，需要合并起来成为一个数组。
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);
