const check = document.querySelector("#check");
const img = document.querySelector("#img");
console.dir(img);

check.addEventListener("change", (e) => {
    if (e.target.checked) {
        img.style.visibility = "visible";
    } else {
        img.style.visibility = "hidden";
    }
});
