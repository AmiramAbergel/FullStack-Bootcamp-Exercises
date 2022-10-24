/*
 * 1. What is wrong with the code? explain in your own words.
 * Fix the code so that invoking the whoIsStronger function will print "I am stronger".
 * note: you cannot change the 'hero' or the whoIsStronger function.
 */
const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    },
};
function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
whoIsStronger(hero.getStrength.bind(hero));

/* Ans:
whoIsStronger function input is function from an object, in that case "this" will point to window (whoIsStronger is function), and for that we need to transfer the pointer such that "this" will point to hero object.
*/
//Fix:
// 21 line fixed, .bind(hero) added.
