const removeDuplicates = (givenArray) => {
    let res = givenArray.filter(
        (element, index) => givenArray.indexOf(element) === index
    );
    return res;
};

let testArr = [3, 4, 4, 3, 6, 3];
console.log(removeDuplicates(testArr));
