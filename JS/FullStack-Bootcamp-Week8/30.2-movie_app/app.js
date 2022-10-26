const formBtn = document.querySelector(".getUser");
const formInput = formBtn.querySelector(".inputUrl");
let movieCard;

const extractUserFromDB = (dBData) => {
    const checkRating = (r) => {};
    let user = {
        poster: dBData.Poster,
        name: dBData.Title,
        genre: dBData.Genre,
        year: dBData.Year,
        plot: dBData.Plot,
        director: dBData.Director,
        actors: dBData.Actors,
        rating: checkRating(dBData.Ratings),
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
const createMovieInfo = (genre, year, plot, director, actors) => {
    const movieInf = document.createElement("div");
    number.textContent = movieInf;
    return number;
};
const createMovieRating = () => {};
const applyInHTML = (obj) => {
    const movieImg = createImg(obj.poster);
    const movieName = createName(obj.name);
    const movieInfo = createMovieInfo(
        obj.Genre,
        obj.year,
        obj.plot,
        obj.director,
        obj.Actors
    );
    const movieRating = createRepo();
    const userContainer = document.createElement("div");
    userContainer.classList.add("movieCard");
    userContainer.append(movieImg, movieName, movieInfo);
    document.body.appendChild(userContainer);
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
    const db = `https://www.omdbapi.com/?t=${userInput}&apikey=d94a3ee1`;
    const response = fetch(db);
    responseAction(response);
};

formBtn.addEventListener("submit", getUser);
window.onload = () => {
    formInput.focus();
};
