const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const mSecondes = document.querySelector(".mSec");
const secondes = document.querySelector(".sec");
const minutes = document.querySelector(".min");

let mSCount = 0;
let sCount = 0;
let mCount = 0;
let res;

const counter = () => {
    if (mSCount == 100) {
        mSCount = 0;
        secondes.textContent = ++sCount;
        if (sCount == 59) {
            sCount = 0;
            minutes.textContent = ++mCount;
            if (mCount == 59) {
                mCount = 0;
            }
        }
    }
    mSecondes.textContent = ++mSCount;
};

const handleStart = () => {
    res = setInterval(counter, 10);
};

const handleStop = () => {
    clearInterval(res);
};

start.addEventListener("click", handleStart);
stop.addEventListener("click", handleStop);
