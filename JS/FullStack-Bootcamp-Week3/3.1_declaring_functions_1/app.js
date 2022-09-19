/*
JavaScript - Declaring Functions

    The following exercise contains the following
subjects:
    * functions

Instructions
    * Please reformat the following function
declarations to function expression.
    * Please reformat the following function
expressions to function declarations.

    Submit the file to Hive
*/

// From function declarations to function expressions
    function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
    }
    function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
    }
    function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
    }

        //Test original:
    console.log(welcome());
    console.log(power(3));
    console.log(add(1,2));

    //Ans1
    const welcome = function(){
        return 'Welcome to Appleseeds Bootcamp!';
    }

     //Ans2
    const power = a => Math.pow(a, 2);

    //Ans3
    const add = (a,b = 5) => a + b;


    //Test modified:
    console.log(welcome());
    console.log(power(3));
    console.log(add(1,2));

    // From function expressions to function declarations
    const hello = () => "Hello!";
    const squareRoot = a => Math.sqrt(a);
    const randomNumbers = (a, b) => Math.random() * (a - b) + b;


    //Ans1
    function hello(){
        let hello = "Hello!";
        return hello;
    }

    //Ans2
    function squareRoot(a){
        let myNumber = a;
        let result = Math.sqrt(myNumber);
        return result;
    }

    //Ans3
    function randomNumbers(a,b){
        let subtraction = a - b;
        let Multiply  = Math.random() * subtraction;
        let result = Multiply + b;
        return result;
    }