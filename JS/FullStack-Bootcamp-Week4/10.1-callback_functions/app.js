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

console.log(firstWordUpperCase("sasda asdopo w2sw ws2", createDash));

//3
