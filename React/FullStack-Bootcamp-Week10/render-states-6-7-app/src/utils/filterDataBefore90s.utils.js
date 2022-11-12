const filterDataBefore90s = (arr) => {
    const filteredArr = arr.filter((user) => {
        let wordArrSplitted = user.birthday.split('-');
        let year = wordArrSplitted[wordArrSplitted.length - 1];
        if (+year < 1990) {
            return user;
        }
    });
    return filteredArr;
};

export default filterDataBefore90s;
