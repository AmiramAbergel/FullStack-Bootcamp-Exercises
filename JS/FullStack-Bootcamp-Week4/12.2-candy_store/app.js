const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2,
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4,
        },
    ],
    cashRegister: 200,
};

//1
function getCandy(candyStore, id) {
    //your code
}

//2
function getPrice(candyStore, id) {
    //your code
}

//3
function addCandy(candyStore, id, name, price) {
    //your code
}

//4
function buy(candyStore, id) {
    //your code
}

//--Tests--

//test1
getCandy(candyStore, null);

//test2
//getPrice(candyStore, null);

//test3
//addCandy(candyStore, null, null, null);

//test4
//buy(candyStore, null);
