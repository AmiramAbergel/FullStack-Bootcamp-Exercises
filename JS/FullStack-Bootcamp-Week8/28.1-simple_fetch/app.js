const btn = document.querySelector("#req");
const body = document.querySelector("body");
console.dir(btn);

const displayJoke = (data) => {
    let joke = data.contents.jokes[0].joke;
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.textContent = joke.title;
    p.textContent = joke.text;
    div.appendChild(p);
    body.appendChild(div);
};

function getJoke() {
    fetch("https://api.jokes.one/jod")
        .then((result) => {
            return result.json();
        })
        .then(displayJoke)

        .catch((err) => {
            console.log(err);
        });
}

btn.addEventListener("click", getJoke);
