let obj = {
    name: "bob",
    printName: function () {
        console.log("My name is " + this.name);
    },
    printNameAfterSec: function () {
        const res = setTimeout(this.printName.bind(obj), 1000);
    },
};

obj.printName();
obj.printNameAfterSec();
