const countArr = (arr) => {
    const resArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        resArr[i] = arr[i].length;
    }
    return resArr;
};

//Test
console.log(countArr(["boo", "doooo", "hoo", "ro"]));
