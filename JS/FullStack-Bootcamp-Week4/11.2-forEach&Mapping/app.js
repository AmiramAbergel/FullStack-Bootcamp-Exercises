//1

const numbers = [23, 12, 423, 6, 3, 76, 3];
const string = "sasd SADAS aszxca AS#s212 sxcv 5ggsPING";

const doubleValues = (arr) => {
    const doubles = arr.map((num) => (num = num * 2));
    return doubles;
};

//Test1
//doubleValues(numbers);

//2
const onlyEvenValues = (arr) => {
    const evenArr = [];
    arr.forEach((element) => {
        if (element % 2 === 0) {
            evenArr.push(element);
        }
    });
    return evenArr;
};

//Test2
//onlyEvenValues(numbers);

//3
const showFirstAndLast = (arr) => {
    const resArr = [];
    arr.map((element, index) => {
        if (index === 0 || index === arr.length - 1) {
            resArr.push(`"${element}"`);
        }
    });
    return resArr;
};

//Test3
//showFirstAndLast(numbers);

//4
const vowelCount = (str) => {
    let arr = str.split("");
    const res = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };
    arr.forEach((element) => {
        switch (element.toLowerCase()) {
            case "a":
                res.a += 1;
                break;
            case "e":
                res.e += 1;
                break;
            case "i":
                res.i += 1;
                break;
            case "o":
                res.o += 1;
                break;
            case "u":
                res.u += 1;
                break;
            default:
                break;
        }
    });
    return res;
};

//Test4
vowelCount(string);

//5
const capitalize = (str) => {};

//Test5

//6
const shiftLetters = (str) => {};

//Test6

//7
const swapCase = (str) => {};

//Test 7
