const numbers = [1, -5, 666, 2, 400, 11];

//1 Nums - Descending to ascending order.
const sort1 = numbers.slice().sort((a, b) => a - b);
console.log(sort1); // Test

//2 Nums - Ascending  to descending order.
const sort2 = numbers.slice().sort((a, b) => b - a);
console.log(sort2); // Test
