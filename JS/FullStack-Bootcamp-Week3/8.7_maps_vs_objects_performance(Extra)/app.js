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
//Object
console.time("Find a specific property from itself (Object)"); // <---- Starts the timer
console.log(obj1[500000]);
console.timeEnd("Find a specific property from itself (Object)"); // <---- Stops the time

//Map
console.time("Find a specific property from itself (Map)"); // <---- Starts the timer
console.log(objMap.get(500000));
console.timeEnd("Find a specific property from itself (Map)"); // <---- Stops the time

//3
//Object
console.time("Adding a single entry (Object)"); // <---- Starts the timer
console.log((obj1[1000000] = 2000000));
console.timeEnd("Adding a single entry (Object)"); // <---- Stops the time
//Map
console.time("Adding a single entry (Map)"); // <---- Starts the timer
console.log(objMap.set(10000000, 20000000));
console.timeEnd("Adding a single entry (Map)"); // <---- Stops the time

//4
//Object
console.time("Deleting a single entry (Object)"); // <---- Starts the timer
delete obj1[500000];
console.timeEnd("Deleting a single entry (Object)"); // <---- Stops the time
//Map
console.time("Deleting a single entryy (Map)"); // <---- Starts the timer
console.log(objMap.delete(500000));
console.timeEnd("Deleting a single entry (Map)"); // <---- Stops the time
