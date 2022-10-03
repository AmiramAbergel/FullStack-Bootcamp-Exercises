// function findSmallest(a, b, c) {
//     if (a > b > c) {
//         return c;
//     } else if (a > c > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// findSmalest(52,66, 2);

// Wrong name line 10
// func totally was wrong and fixed line 15

function findSmallest(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}
findSmallest(52, 66, 2);
