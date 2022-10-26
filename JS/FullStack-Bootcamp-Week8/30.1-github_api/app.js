const formBtn = document.querySelector(".getUser");
const formInput = formBtn.querySelector(".inputUrl");
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

const responseAction = (response) => {
    response
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const res = extractUserFromDB(data);
            applyInHTML(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

const getUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const userInput = form[0].value;
    const db = `https://api.github.com/users/${userInput}`;
    const response = fetch(db);
    responseAction(response);
};

formBtn.addEventListener("submit", getUser);
window.onload = () => {
    formInput.focus();
};
