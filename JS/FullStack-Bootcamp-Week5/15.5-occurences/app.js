function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1; // Changed to +=
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n");

/*
- Line 5 counter should be updated and stored.
*/
