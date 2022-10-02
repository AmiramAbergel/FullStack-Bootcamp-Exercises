const numbers = [1, -5, 666, 2, 400, 11];

//1 - Max.
const max = (arr) => {
    const res = arr.reduce((maxNum, curr) => {
        if (curr > maxNum) {
            return curr;
        } else {
            return maxNum;
        }
    });
    return res;
};

// Test: 1
//max(numbers);

//2 - The sum of even numbers.
const sumEvenNums = (arr) => {
    const res = arr.reduce(() => {});
};

// Test: 2
sumEvenNums(numbers);

//3 - Average
const average = (arr) => {
    const res = arr.reduce(() => {});
};

// Test: 3
//average(numbers);
