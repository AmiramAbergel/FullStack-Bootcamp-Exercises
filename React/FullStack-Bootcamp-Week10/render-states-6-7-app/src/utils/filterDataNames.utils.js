const filterDataNames = (arr) => {
    const nameArr = arr.map((user) => user.name);
    return nameArr;
};

export default filterDataNames;
