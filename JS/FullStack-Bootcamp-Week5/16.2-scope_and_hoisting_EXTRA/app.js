//---------------------------
// Block 1

var x = 10;
console.log(x);
if (true) {
    var x = 20;
    console.log(x);
}
console.log(x);
//---------------------------
//Block 2
var x = 10;
console.log(x);
if (true) {
    (function () {
        var x = 20;
        console.log(x);
    })();
}
console.log(x);
//---------------------------
//Block 3
var x = 10;
console.log(x);
function test() {
    var x = 20;
    console.log(x);
    if (x > 10) {
        let x = 30;
        console.log(x);
    }
    console.log(x);
}
test();
console.log(x);
//---------------------------
//Block 4
var x;
x = 10;
function test() {
    var x;
    if (x > 20) {
        x = 50;
    }
    console.log(x);
}
test();
//---------------------------
//Block 5
function test() {
    var x, y;
    if (false) {
        // Always True
        x = 50;
    }
    console.log(x); //undefined
    console.log(y); //undefined
    y = 100;
    console.log(y); //100
}
test();
//---------------------------
//Block 6
function test() {
    foo();
    bar();
    // Function defiened
    // using function declaration
    function foo() {
        console.log("foo");
    }
    // Function defined
    // using function expression
    var bar = function () {
        console.log("bar");
    };
}
test();
