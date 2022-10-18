const form = document.querySelector("#user-form");

const userName = document.querySelector("#name");
const userAge = document.querySelector("#age");
const userMail = document.querySelector("#email");
const formData = {};

const displayFormData = () => {
    alert(
        "Your Info:\n" +
            formData.userName +
            "\n" +
            formData.userAge +
            "\n" +
            formData.userMail +
            "\n"
    );
};

for (let input of [userName, userAge, userMail]) {
    input.addEventListener("input", (e) => {
        formData[e.target.name] = e.target.value;
    });
}

form.addEventListener("submit", function (e) {
    displayFormData(formData);
    if (window.confirm(`Is the information you provided accurate?`)) {
        alert("Congratulations you successfully sent this form");
    } else {
        e.preventDefault();
    }
});

// userName.addEventListener("input", (e) => {
//     formData["userName"] = e.target.value;
// });
// userAge.addEventListener("input", (e) => {
//     formData["userAge"] = e.target.value;
// });
// userMail.addEventListener("input", (e) => {
//     formData["userMail"] = e.target.value;
// });
