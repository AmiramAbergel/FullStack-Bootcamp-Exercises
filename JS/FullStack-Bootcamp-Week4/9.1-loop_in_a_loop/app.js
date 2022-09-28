const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    const element = listOfNeighbours[i];
    for (let j = 0; j < element.length; j++) {
        console.log(`Neighbour: ${element[j]}`);
    }
}
