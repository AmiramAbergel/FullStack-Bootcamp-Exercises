let numSiblings = prompt('How many siblings do you have?');
console.log(typeof(numSiblings));

function siblings(num){
    if (num == 1){
        console.log(`1 sibling!`);
    }else if (num > 1){
        console.log(`More than 1 sibling!`);
    }else{
        console.log(`No siblings`);
    }
}

//Test:

// siblings(numSiblings);

function siblings2(num){
    if (num === 1){
        console.log(`1 sibling!`);
    }else if (num > 1){
        console.log(`More than 1 sibling!`);
    }else{
        console.log(`No siblings`);
    }
}

//Test:

// siblings2(numSiblings);


//6:
// The result is False;
// '===' Checks whether 2 sides are of the same type, and typeOf(prompt method) is String, which is not equal to Integer.

//7

function siblings3(num){
    let parsedNum = parseInt(num);
    if (parsedNum === 1){
        console.log(`1 sibling!`);
    }else if (parsedNum > 1){
        console.log(`More than 1 sibling!`);
    }else{
        console.log(`No siblings`);
    }
}

//Test:

siblings3(numSiblings);


//8
// This situation requires us to use the '===' operator because it is critical to compare the type and identify incorrect input. 
