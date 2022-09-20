const countryToLiveIn = (language, isIsland, population, country) => {
    if (language === "English" && population < 50000000 && isIsland === false) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria.`);
    }
};

countryToLiveIn("English", false, 40000000, "Finland"); // true
countryToLiveIn("Arabic", false, 40000000, "Saudi"); // false
