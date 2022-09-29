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
    const candy = candyStore.candies.find((c) => c.id === id);
    return candy;
}

//2
function getPrice(candyStore, id) {
    const candy = getCandy(candyStore, id);
    const price = candy.price;
    return price;
}

//3
function addCandy(candyStore, id, name, price) {
    const candy = {
        name: name,
        id: id,
        price: price,
        amount: 1,
    };
    candyStore.candies.push(candy);
}

//4
function buy(candyStore, id) {
    const candy = getCandy(candyStore, id);
    const candyPrice = candy.price;
    if (candy.amount > 0) {
        candy.amount -= 1;
    } else {
        return "Not Available";
    }
    candyStore.cashRegister += candyPrice;
    return candyStore;
}

//--Tests--

//test1
//getCandy(candyStore, "as12f");

//test2
//getPrice(candyStore, "5hd7y");

//test3
//addCandy(candyStore, "0e07W", "Oreo", 6);

//test4
buy(candyStore, "as12f");
