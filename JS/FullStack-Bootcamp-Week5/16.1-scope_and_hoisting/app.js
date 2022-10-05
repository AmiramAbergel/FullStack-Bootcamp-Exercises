/*
Without running the code below, explain in your own words
what the result of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix
them.
*/

//------------------------------------------//
// Block 1
function funcA() {
    console.log(a); //undefined (like var a; - from Line 13)
    console.log(foo()); //2 (Hoisted func deceleration)
    var a = 1;
    function foo() {
        return 2;
    }
}
//test
funcA();

//------------------------------------------------//
//Block 2
var fullName = "John Doe"; // Outer
var obj = {
    fullName: "Colin Ihrig",
    prop: {
        fullName: "Aurelio De Rosa",
        getFullName: function () {
            return this.fullName; // "Aurelio De Rosa"
        },
    },
};
console.log(obj.prop.getFullName()); // "Aurelio De Rosa"
var test = obj.prop.getFullName;

console.log(test()); // Michael: John Doe, Yael: Aurelio De Rosa , Amiram: Error

//------------------------------------------//
//Block 3
function funcB() {
    let a = (b = 0); // a=0, Michael : TypeError
    a++;
    return a;
}
funcB(); // none
console.log(typeof a); // undefined
console.log(typeof b); // b = 0 (Integer)

//------------------------------------------//
//Block 4
function funcC() {
    console.log("1");
}
funcC(); // 2
function funcC() {
    // Move to line 53 (Hoisted)
    console.log("2");
}
funcC(); //2
//------------------------------------------//

//Block 5
function funcD1() {
    d = 1;
}
funcD1(); //undefined
console.log(d); // 1
function funcD2() {
    var e = 1;
}
funcD2(); // Michael: undefined, Yael: undefined, Amiram: undefined, Netanel: undefined
console.log(e); // Michael: Error, Yael: undefined, Amiram: 1, Netanel: undefined

//------------------------------------------//
//Block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); //  "Value of f in global scope: ", f = undefined;
var f = 1;
funcE(); // "Value of f in global scope: ", f = 1;
//------------------------------------------//
