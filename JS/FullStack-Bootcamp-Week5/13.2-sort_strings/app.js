const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//a.1 String - Descending to ascending order.
const sort1 = foods.slice().sort();
console.log(sort1); // Test a.1

//a.2 String - Ascending  to descending order.
const sort2 = foods.slice().sort().reverse();
console.log(sort2); // Test a.2

//b
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

//b.1 String - Descending to ascending order.
const sort3 = foodsWithUpperCase.slice().sort((a, b) => a.localeCompare(b));
console.log(sort3); // Test b.1

//b.2 String - Ascending  to descending order.
const sort4 = foodsWithUpperCase.slice().sort((a, b) => b.localeCompare(a));
console.log(sort4); // Test b.2

//c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

//c.1 String - Longest word to the shortest word
const sort5 = words.slice().sort((a, b) => b.length - a.length);
console.log(sort5); // Test c.1
