/*
1. Create an array containing 4 population values of 4
countries of your choice. Store this array into a variable
called 'populations'
*/

//9.2-While

const populations = [2900, 1441, 212, 38];

//module 3, ex.3.3-declarations vs expressions
const percentageOfWorld3 = function (population) {
    return ((population / 7900) * 100).toFixed(1);
};

const populationPercentages = (arr) => {
    let percentages = [];
    let length = arr.length;
    let num = 0;
    while (num < length) {
        percentages.push(percentageOfWorld3(arr[num]));
        num += 1;
    }
    return percentages;
};

//Test
let testArr = populationPercentages(populations);
console.log(testArr);

//For this task, the for loop is more efficient and easier to use, as well as exposing us to fewer bugs than the while loop.
