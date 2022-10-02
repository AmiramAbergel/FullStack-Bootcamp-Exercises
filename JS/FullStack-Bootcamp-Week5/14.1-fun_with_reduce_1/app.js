const numbers = [100, 0];

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
    const res = arr.reduce((total, curr) => {
        if (curr % 2 === 0) {
            return total + curr;
        } else {
            return total;
        }
    }, 0);
    if (res === 0) return `Invalid`;
    return res;
};

// Test: 2
//sumEvenNums(numbers);

//3 - Average
const average = (arr) => {
    length = arr.length;
    const sum = arr.reduce((total, curr) => {
        return total + curr;
    });
    const res = sum / length;
    return res;
};

// Test: 3
average(numbers);
