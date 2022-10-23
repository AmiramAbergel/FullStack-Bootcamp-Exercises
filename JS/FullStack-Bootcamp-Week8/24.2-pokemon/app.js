function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (attackNum) {
    console.log(`${this.name} used ${this.attackList[attackNum]}`);
};

const P1 = new Pokemon("Squirtile", "Water", ["Bubble", "Tackle"]);
const P2 = new Pokemon("Pikachu", "Electric", ["Paralyze", "Super Bolt"]);
const P3 = new Pokemon("Charmander", "Fire", ["Ember", "Scratch"]);

//Test:
//p1
P1.callPokemon(); // I choose you, Squirtile
P1.attack(0); // Squirtile used Bubble
//p2
P2.callPokemon(); //I choose you, Pikachu
P2.attack(1); //Pikachu used Super Bolt
//p3
P3.callPokemon(); //I choose you, Charmander
P3.attack(1); //Charmander used Scratch
