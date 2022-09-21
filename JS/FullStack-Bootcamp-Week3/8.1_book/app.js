const book = {
    name: "AppleSeeds",
    pages: 343,
    author: "Mordi",
    priceUsd: 99,
    year: 2022,
};

const bookScan = (anyBook) => {
    return `The book ${anyBook.name} was written by ${anyBook.author} in the year ${anyBook.year}`;
};

//Test
bookScan(book);
