const extractFromData = (characterObj, homeWorldObj) => {
    const character = {
        name: characterObj.name,
        height: characterObj.height,
        hairColor: characterObj.hair_color,
        planet: {
            name: homeWorldObj.name,
            population: homeWorldObj.population,
        },
    };
    return character;
};

const combineData = (arr1, arr2) => {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        const element = extractFromData(arr1[i], arr2[i + 1]);
        res.push(element);
    }
    return res;
};
const fetchData = async (url) => {
    const mainDB = url;
    try {
        const response = await fetch(mainDB);
        if (response.status === 404) {
            throw `Not found, ERROR ${response.status}`;
        }
        const responseRes = await response.json();
        return responseRes;
    } catch (error) {
        throw `ERROR! `;
    }
};

const extractHomeWorlds = async (arr) => {
    let res = [arr.length];
    for (let character of arr) {
        const f = fetchData(character.homeworld);
        res.push(f);
    }
    let fRes = await Promise.all(res);
    return fRes;
};

const getData = async () => {
    const dbURL = `https://swapi.dev/api/people/`;
    const characterRes = await fetchData(dbURL);
    const data = characterRes.results; //arr of objs
    console.log(data);
    const homeWorlds = await extractHomeWorlds(data);
    console.log(homeWorlds);
    return combineData(data, homeWorlds);
};
const finalData = await getData();
const createTable = (data) => {
    const table = document.getElementById("myTable");
    const row = ["Name", "Hair", "Height", "Planet name", "Population"];
    const values = [
        "name",
        "hairColor",
        "height",
        "planet.name",
        "planet.population",
    ];
    let output = "";
    output += "<tr>";
    output += `<th colspan="20">Star Wars</th>`;

    for (let i = 0; i < 10; i++) {
        //rows
        output += "<tr>";
        for (let j = 0; j < 5; j++) {
            //cols
            if (i == 0 && j == 10) {
            } else {
                if (i == 0) {
                    output += "<th>" + row[j] + "</th>";
                } else {
                    switch (values[j]) {
                        case "name":
                            output += "<td>" + data[i].name + "</td>";
                            break;
                        case "hairColor":
                            output += "<td>" + data[i].hairColor + "</td>";
                            break;
                        case "height":
                            output += "<td>" + data[i].height + "</td>";
                            break;
                        case "planet.name":
                            output += "<td>" + data[i].planet.name + "</td>";
                            break;
                        case "planet.population":
                            output +=
                                "<td>" + data[i].planet.population + "</td>";
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        output += "</tr>";
    }
    table.innerHTML = output;
};
console.log(finalData);
createTable(finalData);
