const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const letterCounts = (array) => {
    const letterCounts = {};
    let maxCounts = 0;
    let mostOccurredLetter;
    let lower = array.toString().toLowerCase().replace(/\s|,/g, "").split("");
    for (let char of lower) {
        if (char in letterCounts) {
            letterCounts[char]++;
        } else {
            letterCounts[char] = 1;
        }
        if (letterCounts[char] > maxCounts) {
            maxCounts = letterCounts[char];
            mostOccurredLetter = char;
        }
    }
    return [letterCounts, mostOccurredLetter];
};

console.log(letterCounts(array));
