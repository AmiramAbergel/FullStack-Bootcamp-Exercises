//1
const obj1 = {};
const maxCount = 1000000;
console.time("My operation on object"); // <---- Starts the timer

for (let i = 0; i < maxCount; i++) {
    //Perform the operation to be measured multiple times
    obj1[i] = i * 2;
}

console.timeEnd("My operation on object"); // <---- Stops the time

// same procedure for a Map object

let objMap = new Map();
console.time("My operation on map"); // <---- Starts the timer

for (let i = 0; i < maxCount; i++) {
    //Perform the operation to be measured multiple times
    objMap.set(i, i * 2);
}
console.log(objMap);
console.timeEnd("My operation on map"); // <---- Stops the time

//2
