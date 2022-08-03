// Declare Array
var numbers = [45, 68, 78, 56, 89, 98];

// 1. get element value by index
var element = numbers[1];
console.log(element); // print 68

// 2. set element value by index
numbers[1] = 77;
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98 ]

// 3. find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex); // print  4

// 4. Adding an element to an array as the last element array.
numbers.push(63);
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98, 63]

// 5. Adding an element to an array as the fast element array.
numbers.unshift(64);
console.log(numbers); // print [ 64, 45, 77, 78, 56, 89, 98, 63]

// 6. Deleting an element to an array as the last element array.
numbers.pop();
console.log(numbers); // print [64, 45, 77, 78, 56, 89, 98]

// 7. Deleting an element to an array as the fast element array.
numbers.shift(64);
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98]

