const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
    const lower = arr.map((element) => {
        return element.toLowerCase();
    });
    const res = {};
    console.log(`${Object.keys(res)} : ${Object.values(res)}`);
};

for (let letter of Object.keys(res)) {
    console.log(`${letter} : ${res[letter]}`);
}
