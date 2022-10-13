const bulbOff = document.querySelector(".bulbs .bulbOff");
const bulbOn = document.querySelector(".bulbs .bulbOn");

const handleBulbs = (e) => {
    let input = e.target;
    const compStyle = getComputedStyle(input);
    console.dir(input);
    if (input.className === "bulbOff") {
        bulbOn.style.visibility = "visible";
        input.style.visibility = "hidden";
    } else {
        bulbOn.style.visibility = "hidden";
        bulbOff.style.visibility = "visible";
    }
};

bulbOff.addEventListener("click", handleBulbs);
bulbOn.addEventListener("click", handleBulbs);
