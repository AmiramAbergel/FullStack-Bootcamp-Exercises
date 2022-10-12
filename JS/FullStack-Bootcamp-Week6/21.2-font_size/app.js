const container = document.querySelector(".container");
const btnPlus = container.querySelector("button[id=plus]");
const btnMinus = container.querySelector("button[id=minus]");
const h1 = document.querySelector("h1");
const compStyle = getComputedStyle(h1);

const changeFontSize = (event) => {
    let parsed = parseFloat(compStyle.fontSize);
    const input = event.target;
    console.log(parsed);
    if (parsed > 6 && parsed < 100) {
        if (input.id === "plus") {
            h1.style.fontSize = parsed + 1 + "px";
            console.log(h1.style.fontSize);
        } else {
            h1.style.fontSize = parsed - 1 + "px";
            console.log(h1.style.fontSize);
        }
    } else if (parsed === 6) {
        h1.style.fontSize = parsed + 1 + "px";
    } else {
        h1.style.fontSize = parsed - 1 + "px";
    }
};

btnPlus.addEventListener("click", changeFontSize);
btnMinus.addEventListener("click", changeFontSize);
