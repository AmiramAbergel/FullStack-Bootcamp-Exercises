const myForm = document.querySelector("form");
const inputs = myForm.querySelector(".inputs input");
const btn = document.querySelector('input[type="submit"]');

btn.addEventListener("click", function () {
    if (inputs.value >= 18) {
        alert("You can drink");
    } else {
        alert("You’re too young");
    }
});
