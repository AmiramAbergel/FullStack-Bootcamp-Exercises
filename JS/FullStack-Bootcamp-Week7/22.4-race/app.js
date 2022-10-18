const raceTable = document.querySelector(".racer-table");
const player1 = document.querySelector("#player1-race");
const player2 = document.querySelector("#player2-race");
const player1WinMsg = document.querySelector(".player1WinMsg");
const player2WinMsg = document.querySelector(".player2WinMsg");
let player1ChildActive = player1.firstElementChild;
let player2ChildActive = player2.firstElementChild;
const resetBtn = document.querySelector(".reset");
console.dir(player1);

window.addEventListener("keyup", (e) => {
    const input = e.key;
    if (input === "ArrowRight" || input === "Right") {
        if (player1ChildActive.nextElementSibling !== null) {
            player1ChildActive.classList.remove("active");
            player1ChildActive = player1ChildActive.nextElementSibling;
            player1ChildActive.classList.add("active");
        }
    }
    checkWin();
    if (input === "d") {
        if (player2ChildActive.nextElementSibling !== null) {
            player2ChildActive.classList.remove("active");
            player2ChildActive = player2ChildActive.nextElementSibling;
            player2ChildActive.classList.add("active");
        }
    }
    checkWin();
    console.log(input);
});

const checkWin = () => {
    const Player1IsWon = player1ChildActive.classList.contains("finish");
    const Player2IsWon = player2ChildActive.classList.contains("finish");
    if (Player1IsWon && !Player2IsWon) finishGame(1);
    if (!Player1IsWon && Player2IsWon) finishGame(2);
};

const finishGame = (winner) => {
    if (winner === 1) {
        player1WinMsg.style.visibility = "visible";
    } else {
        player2WinMsg.style.visibility = "visible";
    }
    resetBtn.style.visibility = "visible";
};

resetBtn.addEventListener("click", () => {
    player1ChildActive.classList.remove("active");
    player2ChildActive.classList.remove("active");
    player1ChildActive = player1.firstElementChild;
    player2ChildActive = player2.firstElementChild;
    player1ChildActive.classList.add("active");
    player2ChildActive.classList.add("active");
    player1WinMsg.style.visibility = "hidden";
    player2WinMsg.style.visibility = "hidden";
    resetBtn.style.visibility = "hidden";
});
