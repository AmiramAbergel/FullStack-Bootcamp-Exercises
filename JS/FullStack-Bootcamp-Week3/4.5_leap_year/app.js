let leapYearChecker = function (year) {
    if (year % 4 == 0 || (year % 4 == 0 && year % 400 == 0)) {
        console.log("It is indeed a leap year");
    } else {
        console.log("This is not a leap year.");
    }
};

leapYearChecker(2012);
leapYearChecker(2100);
leapYearChecker(2400);
