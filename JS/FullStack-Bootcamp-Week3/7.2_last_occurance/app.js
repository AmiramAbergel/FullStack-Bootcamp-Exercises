const string = "The more you know, the more you know that you don't know";

const myArr = string.split(" ");

const lastIndex = (arr, item) => {
    if (arr.includes(item)) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    } else {
        return -1;
    }
};

console.log(lastIndex(myArr, "you"));
