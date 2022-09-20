let leapYearChecker = function (year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("It is indeed a leap year");
    } else {
        console.log("This is not a leap year.");
    }
};

//leap
leapYearChecker(2012);
leapYearChecker(2400);
leapYearChecker(2000);

//not leap
leapYearChecker(1700);
leapYearChecker(1800);
leapYearChecker(2600);
leapYearChecker(2100);
