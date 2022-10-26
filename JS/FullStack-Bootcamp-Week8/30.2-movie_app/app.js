const formBtn = document.querySelector(".getMovie");
const formInput = formBtn.querySelector(".inputUrl");
const moviesArr = [];
let movieCard;
const checkRating = (ratingsArr) => {
    let res;
    if (ratingsArr.length === 0) {
        res = "Rating not exist";
    } else {
        res = {};
        for (let i = 0; i < ratingsArr.length; i++) {
            const element = ratingsArr[i];
            res[`${element.Source}`] = element.Value;
        }
    }
    return res;
};
const extractMovieFromDB = (dBData) => {
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
    const name = document.createElement("h1");
    name.textContent = str;
    return name;
};
const createMovieInfo = (arr) => {
    let output = "<h2>Movie Detail:</h2>";
    output += `
        <ul>
            <li>Genre: ${arr[0]}</li>
            <li>Year: ${arr[1]}</li>
            <li>Plot: ${arr[2]}</li>
            <li>Director: ${arr[3]}</li>
            <li>Actors: ${arr[4]}</li>
        </ul>
        `;
    const movieInf = document.createElement("div");
    movieInf.innerHTML = output;
    return movieInf;
};
const createMovieRating = (obj) => {
    let output = "<h2>Rating:</h2>";
    const movieRat = document.createElement("div");
    for (const [key, value] of Object.entries(obj)) {
        output += `${key}: ${value}</br>`;
    }
    movieRat.innerHTML = output;
    console.log(movieRat);
    return movieRat;
};
const applyInHTML = (obj) => {
    if (movieCard) {
        movieCard.remove();
    }
    const movieImg = createImg(obj.poster);

    const movieName = createName(obj.name);
    const movieInfo = createMovieInfo([
        obj.genre,
        obj.year,
        obj.plot,
        obj.director,
        obj.actors,
    ]);
    console.log(obj.rating);
    const movieRating = createMovieRating(obj.rating);
    const userContainer = document.createElement("div");
    userContainer.classList.add("movieCard");
    userContainer.append(movieImg, movieName, movieInfo, movieRating);
    document.body.appendChild(userContainer);
    movieCard = document.querySelector(".movieCard");
};

const responseAction = async (db, userInput) => {
    try {
        const response = await fetch(db);
        if (response.status === 404) {
            throw `Not found, ERROR ${response.status}`;
        }
        const responseRes = await response.json();
        const data = extractMovieFromDB(responseRes);
        const check = moviesArr.includes(userInput);
        if (moviesArr.length !== 0 && check) {
            throw `ERROR exist already! `;
        } else {
            moviesArr.pop();
            moviesArr.push(userInput);
            console.log(data);
            applyInHTML(data);
        }
    } catch (error) {
        throw `ERROR! `;
    }
};

const getMovie = (event) => {
    event.preventDefault();
    const form = event.target;
    const userInput = form[0].value;
    const db = `https://www.omdbapi.com/?t=${userInput}&apikey=d94a3ee1`;
    if (userInput !== "") {
        responseAction(db, userInput);
    } else {
        throw `ERROR! Can't be empty `;
    }
};

formBtn.addEventListener("submit", getMovie);
window.onload = () => {
    formInput.focus();
};
