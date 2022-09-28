const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const arrCompare = (arr1, arr2) => {
    let sameItems = [];
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            if (element === arr2[j]) {
                sameItems.push(element);
            }
        }
    }
    if (sameItems.length === 0) {
        return false;
    } else {
        return sameItems;
    }
};

//Test1
console.log(arrCompare(food, food1));

//Test2
const food2 = ["Noodle", "Pasta", "Meat", "Cucumber", "Olives"];
const food3 = ["Fries", "Ice-cream", "Pizza", "Hamburgers"];

console.log(arrCompare(food2, food3));
