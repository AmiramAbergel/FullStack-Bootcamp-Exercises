const formBtn = document.querySelector(".getUser");
const formInput = formBtn.querySelector(".inputUrl");
const cards = [];
let card;

const extractUserFromDB = (dBData) => {
    let user = {
        avatar: dBData.avatar_url,
        name: dBData.name,
        reposNum: dBData.public_repos,
        link: dBData.html_url,
    };
    return user;
};
//
const createImg = (url) => {
    const image = document.createElement("img");
    image.setAttribute("src", url);
    image.setAttribute("height", 500); // height in px
    image.setAttribute("width", 500); //  width in px
    return image;
};
const createName = (str) => {
    const name = document.createElement("h2");
    name.textContent = str;
    return name;
};
const createRepo = (num) => {
    const number = document.createElement("p");
    number.textContent = num;
    return number;
};
const applyInHTML = (obj) => {
    if (card) {
        card.remove();
    }
    const userImg = createImg(obj.avatar);
    const userName = createName(obj.name);
    const userRepos = createRepo(obj.reposNum);
    const userContainer = document.createElement("div");
    userContainer.classList.add("card");
    userContainer.append(userImg, userName, userRepos);
    document.body.appendChild(userContainer);
    card = document.querySelector(".card");
    let link = obj.link;
    card.addEventListener("click", function () {
        window.open(link, "_blank");
    });
};

const responseAction = async (db, userInput) => {
    try {
        const response = await fetch(db);
        if (response.status === 404) {
            throw `Not found, ERROR ${response.status}`;
        }
        const responseRes = await response.json();
        const data = extractUserFromDB(responseRes);
        const check = cards.includes(userInput);
        if (cards.length !== 0 && check) {
            throw `ERROR exist already! `;
        } else {
            cards.pop();
            cards.push(userInput);
            applyInHTML(data);
        }
        console.log(cards);
    } catch (error) {
        throw `ERROR! `;
    }
};

const getUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const userInput = form[0].value;
    const db = `https://api.github.com/users/${userInput}`;
    if (userInput !== "") {
        responseAction(db, userInput);
    }
    // console.log(responseAction(db));
};

formBtn.addEventListener("submit", getUser);
window.onload = () => {
    formInput.focus();
};
