const objAsKey1 = {
    name: "str1",
};
const objAsKey2 = {
    name: "str2",
};
const objAsKey3 = {
    name: "str3",
};

let objMap = new Map();
objMap.set(objAsKey1, 1).set(objAsKey2, 2).set(objAsKey3, 3);

console.log(objMap);

for (let [k, v] of objMap) {
    console.log(`Key: ${k.name}, has the value of ${v}`);
}
