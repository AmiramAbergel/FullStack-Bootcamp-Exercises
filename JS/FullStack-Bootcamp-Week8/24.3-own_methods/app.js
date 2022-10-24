//Instructions
/*
 * 1. Build your own filter method with the help of prototypes
 */
Array.prototype.myFilter = function (callback) {
    const resArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resArr.push(this[i]);
        }
    }
    return resArr;
};

/*
 * 2. Build your own find method with the help of prototypes
 */

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
};

/*
 * Extra:
 * 3. Build your own reduce method with the help of prototypes
 */

Array.prototype.myReduce = function (callback, initialValue = this[0]) {
    let res = initialValue;
    for (let i = 1; i < this.length; i++) {
        if (initialValue === this[0]) {
            res = callback(this[i - 1], this[i], i, this);
        } else {
            res = callback(res, this[i], i, this);
        }
    }
    return res;
};
const myArr3 = [1, 2, 3, 4];
const initialValue = 0;

const sum = myArr3.myReduce((prevVal, currVal) => {
    return prevVal + currVal;
}, initialValue);

console.log(sum);
//
console.log([1, 100].myReduce((a, b) => Math.max(a, b), 50));
console.log([1, 100].myReduce((a, b) => Math.max(a, b), 101));
console.log([50].myReduce((a, b) => Math.max(a, b), 10));
//original reduce:
console.log(sum);
console.log([1, 100].reduce((a, b) => Math.max(a, b), 50));
console.log([1, 100].reduce((a, b) => Math.max(a, b), 101));
console.log([50].reduce((a, b) => Math.max(a, b), 10));
