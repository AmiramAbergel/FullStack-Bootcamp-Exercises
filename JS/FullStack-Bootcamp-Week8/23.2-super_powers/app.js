const storm = {
    // add code here
    superPower: "flying",
    printFunc: printSuperPower,
};
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.printFunc();
