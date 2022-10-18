const form = document.querySelector("#user-form");

const userName = document.querySelector("#name");
const userAge = document.querySelector("#age");
const userMail = document.querySelector("#email");

const formData = {};

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

userName.addEventListener("input", (e) => {
    formData["userName"] = e.target.value;
});
userAge.addEventListener("input", (e) => {
    formData["userAge"] = e.target.value;
});
userMail.addEventListener("input", (e) => {
    formData["userMail"] = e.target.value;
});
