//1
const populations = [2900, 1441, 212, 38];
//2
const populationPercentages = (arr) => {
    let percentages = [];
    for (let i = 0; i < arr.length; i++) {
        percentages.push(percentageOfWorld2(arr[i]));
    }
    return percentages;
};

//module 3, ex.3.3-declarations vs expressions
const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100).toFixed(1);
};

//Test
let testArr = populationPercentages(populations);
console.log(testArr);
