const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

const displayReadableBooks = (books) => {
    const readableBooks = books.filter((b) => b.readingStatus === true);
    readableBooks.forEach((element) => {
        console.log(
            `Book name: ${element.title}\n Author name:${element.author}\n Reading status: ${element.readingStatus}`
        );
    });
};

//Test
displayReadableBooks(library);
