//1
const myCountry = {
    country: "Spain",
    capital: "Madrid",
    language: "Spanish",
    populationMillion: 47.35,
    neighbors: ["France", "Portugal", "Morocco"],
    describe() {
        return (
            this.country +
            " has " +
            this.populationMillion +
            " million people, their mother tongue is " +
            this.language +
            ", they have " +
            this.neighbors.length +
            " Neighbouring countries and a capital called " +
            this.capital +
            "."
        );
    },
    checkIsland() {
        this.isIsland = this.neighbors.length ? false : true;
    },
};

//3
myCountry.describe();

//4
myCountry.checkIsland();
console.log(myCountry);
