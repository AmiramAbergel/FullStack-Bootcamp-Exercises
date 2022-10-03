function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
calcAverage([85, 90, 92]);

// Var sum; (line 2) not initialized, and the return statement should divide by array length in order to calc the average )
