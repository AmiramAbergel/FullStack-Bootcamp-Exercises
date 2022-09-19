
function percentageOfWorld1(population){
    const wPopulation = 7900 ;
    let percentage = (population/wPopulation)*100;
    let res = percentage.toFixed(1);
    return res;
}

//3.1
let chinePopulation = percentageOfWorld1(1441);
console.log(chinePopulation);

//3.2

let brazilPopulation = percentageOfWorld1(212);
console.log(brazilPopulation);

//3.3
let canadaPopulation = percentageOfWorld1(38);
console.log(canadaPopulation);


//4  function expression
