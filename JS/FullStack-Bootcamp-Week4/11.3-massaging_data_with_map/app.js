const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

//1
const namesFromArr = (arr) => {
    const namesArr = [];
    arr.forEach((element) => {
        namesArr.push(element.name);
    });
    return namesArr;
};

//Test1
//namesFromArr(data);

//2
const objBorn90sFromArr = (arr) => {
    const obj90sArr = [];
    arr.forEach((element) => {
        if (parseInt(element.birthday.split("-")[2]) < 1990) {
            obj90sArr.push(element);
        }
    });
    return obj90sArr;
};

//Test2
//objBorn90sFromArr(data);

//3
const foodObjFromArr = (arr) => {
    let foodObj = [];
    arr.forEach((element, index) => {
        foodObj[index] = Object.assign({}, element.favoriteFoods);
    });
    return foodObj;
};

//Test3
foodObjFromArr(data);

// const reArr = arr.map(({ key, value }) => {
//     if (key === "") {
//     }
// });

//    Object.entries(obj).forEach(([key, value]) => {});
