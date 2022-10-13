const form = document.querySelector(".smileForm");
const inputs = form.querySelector('.inputs input[type="text"]');
const btn = document.querySelector("button");
const container = document.querySelector(".container");

const handleSmile = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let userInput = parseInt(inputs.value);
    if (Number.isInteger(userInput) === false) {
        alert("Error! should be valid Integer");
    } else {
        for (let i = 0; i < userInput; i++) {
            const newSmiley = document.createElement("img");
            newSmiley.src = "./img/smile-icon.png";
            newSmiley.classList.add("smileyImg");
            container.append(newSmiley);
        }
    }
};

btn.addEventListener("click", handleSmile);
