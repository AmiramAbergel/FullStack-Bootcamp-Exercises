const book1 = {
    name: "AppleSeeds",
    author: "Mordi",
    year: 2,
};

const book2 = {
    name: "JsBook",
    author: "MDN",
    year: 5,
};

const bookUtils = {
    getFirstPublished(testYearBookA, testYearBookB) {
        if (testYearBookA["year"] > testYearBookB["year"]) {
            return testYearBookB;
        } else {
            return testYearBookA;
        }
    },
    setNewEdition(book, editionYear) {
        book["latestEdition"] = editionYear;
    },
    setLanguage(book, language) {
        book["language"] = language;
    },
    setTranslation(book, language, translator) {
        book.translation = {
            translator: translator,
            language: language,
        };
    },
    setPublisher(book, bookName, location) {
        book.publisher = {
            name: bookName,
            location: location,
        };
    },
    isSamePublisher(checkBookA, checkBookB) {
        if (
            checkBookA.publisher.name === checkBookB.publisher.name &&
            checkBookA.publisher.location === checkBookB.publisher.location
        ) {
            return "publisher name and location are identical in the 2 books";
        }
        return "publisher name and location are NOT! identical in the 2 books";
    },
};

console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setTranslation(book1, "Hebrew", "Mordi");
console.log(book1);
console.log(book2);

bookUtils.setPublisher(book1, "Mordi", "IL");
bookUtils.setPublisher(book2, "Mordi", "ES");

console.log(bookUtils.isSamePublisher(book1, book2));
