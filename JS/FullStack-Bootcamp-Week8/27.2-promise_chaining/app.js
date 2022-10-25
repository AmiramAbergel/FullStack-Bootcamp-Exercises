const makeAllCaps = (arr) => {
    const arrOfWords = arr;
    return new Promise((resolve, reject) => {
        if (arrOfWords) {
            resolve();
        } else {
            reject();
        }
    });
};

makeAllCaps(arrOfWords)
    .then(() => {
        let resArr = [arrOfWords.length];
        for (let i = 0; i < resArr.length; i++) {
            resArr.push(arrOfWords[i].toUpperCase());
        }
        makeAllCaps(resArr).then(() => {
            console.log();
        });
    })
    .catch(() => {
        console.log();
    });
