const people = ["Greg", "Mary", "Devon", "James"];
//1
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//2
people.shift();

//3
people.pop();

//4
people.unshift("Matt");

//5
people.push("Amiram");

//
console.log(people);

//6
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

//7
let copyArr = people.slice(2, 4);
console.log(copyArr);

//8
console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo")); //-1

//10
const people2 = ["Greg", "Mary", "Devon", "James"];
people2.splice(2, 1, "Elizabeth", "Artie");
console.log(people2);

//11
const people3 = ["Greg", "Mary", "Devon", "James"];
let withBob = people3.concat("Bob");
console.log(withBob);
