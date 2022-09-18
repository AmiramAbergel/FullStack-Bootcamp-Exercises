
function todayDateTwo() {
    const date = new Date();
    let currentDay = date.toLocaleString("en", { weekday: "long" });
    let currentDayOfMonth = date.getDate();
    let currentMonth = date.toLocaleString("en", { month: "long" });
    let currentYear = date.getFullYear();
    let res = `Today is ${currentDay} the ${currentDayOfMonth} of ${currentMonth}, ${currentYear}`;
    return res;
}

console.log(todayDateTwo());
