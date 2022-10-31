/** 1)
  Create an input field and a button when the button is clicked 
  call function that receives 'number' as a parameter (from input field) 
  and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive' 
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */
//! Check yourself once with .then .catch and once with async await
//! DRY
//! Small functions
const formBtn = document.querySelector(".getNum");
const formInput = formBtn.querySelector(".input");

window.onload = () => {
    formInput.focus();
};

const getNum = async (event) => {
    try {
        event.preventDefault();
        const form = event.target;
        const userInput = form[0].value;
        if (userInput !== "") {
            await wait(userInput, 2000);
        } else {
            throw "not found!";
        }
    } catch (error) {
        throw `${error}! `;
    }
    // event.preventDefault();
    // const form = event.target;
    // const userInput = form[0].value;
    // if (userInput !== "") {
    //     await wait(userInput, 2000);
    // .then(() => {
    //     console.log("You can drive");
    // })
    // .catch(() => {
    //     console.log("You're too young to drive!");
    // });
    // }
};

async function wait(input, milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input > 17) {
                resolve("You can drive");
            } else {
                reject("You're too young to drive!");
            }
        }, milliseconds);
    });
}

formBtn.addEventListener("submit", getNum);
