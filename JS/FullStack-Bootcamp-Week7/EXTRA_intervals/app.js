const hours = document.querySelector(".hrs");
const minutes = document.querySelector(".mns");
const secondes = document.querySelector(".scd");

let sCount = 40;
let mCount = 3;
let hCount = 15;

const fSecondes = () => {
    setInterval(counter, 1000);
};

const counter = () => {
    if (sCount == 60) {
        sCount = 0;
        minutes.textContent = ++mCount;
        if (mCount == 59) {
            mCount = 0;
            hours.textContent = ++hCount;
            if (hours == 23) {
                hCount = 0;
            }
        }
    }
    secondes.textContent = ++sCount;
};

fSecondes();
