function onlyStrings(arr) {
    return arr.every((element) => {
        return typeof element === "string";
    });
}

function upper(arr) {
    const upperArr = arr.map((word) => word.toUpperCase());
    return upperArr;
}

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (onlyStrings(arr)) {
            resolve(upper(arr));
        } else {
            reject("Array not contains only strings!");
        }
    });
};

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (onlyStrings(arr)) {
            resolve(arr.sort());
        } else {
            reject("Array not contains only strings!");
        }
    });
};

//------------Tests---------------//
const arr1 = ["apple", "school"];
const arr2 = ["promises", 2];
makeAllCaps(arr1)
    .then(sortWords)
    .then((data) => console.log(data))
    .catch((e) => {
        throw e;
    });
//--------------------------------//
makeAllCaps(arr2)
    .then((data) => sortWords(data))
    .then((data) => console.log(data))
    .catch((e) => {
        throw e;
    });
