//1
const filled = new Array(100).fill({ pizza: "Margarita" });

console.log(filled);

//2
const arrFrom = Array.from({ length: 100 }, (element, index) => {
    return index + 1;
});
console.log(arrFrom);

//3
const object1 = {
    a: "pizza",
    b: 2,
    c: false,
};
let res = Object.values(object1);
console.log(res);

//4
let arr4 = [3, "boo", "foo", 2, "bye"];
const obj = Object.assign({}, arr4);

console.log(obj);

//5 -> Array.isArray()
let arr = new Array(10);
console.log(Array.isArray(arr));

//6
const arr6 = [3, "boo", "foo", 2, "bye"];
console.log(arr6);
//6.1
const arr7 = Array.from(arr6);
console.log(arr7);
//or
const arr71 = arr6.slice();
console.log(arr71);
//or
const arr72 = [...arr7];
console.log(arr72);
//6.2
const arr8 = arr6;
console.log(arr8);
