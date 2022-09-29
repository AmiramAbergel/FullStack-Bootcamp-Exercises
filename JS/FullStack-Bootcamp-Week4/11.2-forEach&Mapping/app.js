//1

const numbers = [23, 12, 423, 6, 3, 76, 3];
const string = "sqsd SADAS aszxca AS#s212 sxcv 5ggsPING";
const arr2 = ["hi", 1, 2, "sh", "bye"];

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
        if (
            typeof element === "string" &&
            (index === 0 || index === arr.length - 1)
        ) {
            resArr.push(`"${element}"`);
        }
    });
    return resArr;
};

//Test3
showFirstAndLast(arr2);

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
//vowelCount(string);

//5
const capitalize = (str) => {
    let arr = str.split("");
    arr.forEach((element, index) => {
        arr[index] = element.toUpperCase();
    });
    return arr.join(" ");
};

//Test5
//capitalize(string);

//6
const shiftLetters = (str) => {
    let res = str.split("");
    res.forEach((element, index) => {
        charcode = element.charCodeAt() - 1;
        res[index] = String.fromCharCode(charcode);
    });
    return res.join(" ");
};

//Test6
//shiftLetters(string);

//7
const swapCase = (str) => {
    let arr = str.split("");
    arr.forEach((element, index) => {
        if (index % 2 !== 0) {
            arr[index] = element.toUpperCase();
        } else {
            arr[index] = element.toLowerCase();
        }
    });
    return arr.join(" ");
};

//Test 7
//swapCase(string);
