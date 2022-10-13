const form = document.querySelector("form");
const textArea = form.querySelector("textarea");
const btn = form.querySelector("input");

const verifyContent = () => {
    const input = textArea.value;
    if (input.length < 100) {
        alert(
            "Before clicking the button, you must enter at least 100 characters!"
        );
    }
};

btn.addEventListener("click", verifyContent);
