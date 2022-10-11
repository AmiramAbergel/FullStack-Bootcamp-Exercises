const myForm = document.querySelector("form");
const inputs = myForm.querySelectorAll(".inputs input");
console.log(myForm);

function handleInput(event) {
    const input = event.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}

function handlePaste(event) {
    const paste = (event.clipboardData || window.clipboardData).getData("text");
    inputs.forEach((input, i) => {
        console.log(input);
        input.value = paste[i] || "";
    });
}

inputs[0].addEventListener("paste", handlePaste);

myForm.addEventListener("input", handleInput);
