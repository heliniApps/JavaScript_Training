import Book from "./Book.js";

const hanselAndGretel = new Book(
    "HAG01",
    "Hansel and Gretel",
    "Jacob Ludwig",
    "1980-06-23",
    1,
    200,
    "soft cardboard",
    true
);

const harryPoterPhilosopherStone = new Book(
    "HP02",
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    "1997-06-26",
    1,
    500,
    "soft cardboard",
    true
);

const sherlockHolmes = new Book(
    "SH03",
    "The Adventures of Sherlock Holmes",
    "Arther Conan Doyle",
    "1982-10-14",
    2,
    200,
    "newspaper",
    false
);

export { hanselAndGretel, harryPoterPhilosopherStone, sherlockHolmes };
