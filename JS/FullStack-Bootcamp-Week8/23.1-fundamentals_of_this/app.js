/*
 * Question 1:
 * In your own words what will this point to and why?
 * (Note this is the global scope)
 */
console.log(this);
/*
* Ans: 
this - will point to window. because window is the current execution and this inside global scope is a reference to an object- in our case: window in the browser.
this point to the owner to the of the function.
*/

//---------------------------------------------------//
/*
 * Question 2:
 * a. In your own words what will this point to and why?
 * b. How can you fix this code?
 */
const myObj = {
    name: "Timmy",
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();

/*
* Ans:
this will point to window again because of the arrow function.
Arrow function does not have its own this.
* Fix:
We will change the arrow function to function declaration.
*/
//---------------------------------------------------//

/*
 * Question 3:
 * In your own words what will this point to and why?
 */
const myFuncDec = function () {
    console.log(this);
};
/*
* Ans:
this will point to window again because myFuncDec is in the global scope,
in our case window browser is the global scope .

*/
//---------------------------------------------------//
/*
 * Question 4:
 * In your own words what will this point to and why?
 */
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
/*
* Ans: 
Arrow function does not have its own this.
In our case this point to arrow function.
For that case this - point to window.
*/
//---------------------------------------------------//
/*
 * Question 5:
 * a. In your own words, what will this point to and why?
 * b. How can you fix this code?
 */
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});
//---------------------------------------------------//
/*
* Ans: 
this will point to window, because there is arrow function that called by "addEventListener".
* Fix:
First we should add event like 'click', 2nd we need to store document with
let/const than "this" (that acts like call "event") will apply on the our new stored variable.
*/
