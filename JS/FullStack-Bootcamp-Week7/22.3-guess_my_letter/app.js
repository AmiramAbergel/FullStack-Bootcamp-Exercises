const resetGameBtn = document.querySelector("#resetGame");
const randomGuess = document.querySelector("input[type=text]");
const userGuess = document.querySelector("#userGuess");
const rightMsg = document.querySelector(".rightMsg");
const wrongMsg = document.querySelector(".wrongMsg");
function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

let randomChar = generateRandomLetter();

console.log(randomChar);

const addItemInput = document.querySelector("#addItem");
let arr = [];
addItemInput.addEventListener("keyup", function (e) {
    let allInput = e.target.value;
    let len = allInput.length;
    let input = allInput.substr(len - 1);
    if (!arr.includes(input)) {
        arr.push(input);
        userGuess.textContent = arr;
        if (input === randomChar) {
            randomGuess.placeholder = randomChar;
            rightMsg.style.visibility = "visible";
            wrongMsg.style.visibility = "hidden";
            addItemInput.disabled = true;
        } else {
            wrongMsg.style.visibility = "visible";
        }
    }
});

resetGameBtn.addEventListener("click", (e) => {
    arr = [];
    wrongMsg.style.visibility = "hidden";
    rightMsg.style.visibility = "hidden";
    addItemInput.value = "";
    randomGuess.placeholder = "?";
    userGuess.textContent = "";
    randomChar = generateRandomLetter();
    addItemInput.disabled = false;
    console.log(randomChar);
});
