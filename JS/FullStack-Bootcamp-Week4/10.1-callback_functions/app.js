//1
const isString = (str, func) => {
    if (typeof str === "string") {
        return func(str);
    } else {
        console.log(`${str} Not a string`);
    }
};

const logString = (str) => {
    console.log(`${str} is indeed a string`);
};

isString("Test", logString);
isString(1, logString);

//2
const firstWordUpperCase = (str, func) => {
    let res = str.split(" ")[0].toUpperCase() + " " + str.slice(1);
    return func(res);
};

const createDash = (str) => {
    return str.replace(/\s/g, "-");
};

//3
console.log(firstWordUpperCase("sasda asdopo w2sw ws2", createDash));

//4 - Create your own function
// isEven - check if num (num > 0) is even or odd num
const isEven = (num, func) => {
    if (num % 2 === 0) {
        return func(num);
    } else {
        console.log(`${num} is odd`);
    }
};

const logEven = (num) => {
    console.log(`${num} is even`);
};

//test
isEven(4, logEven);
isEven(5, logEven);
isEven(14, logEven);
isEven(15, logEven);
