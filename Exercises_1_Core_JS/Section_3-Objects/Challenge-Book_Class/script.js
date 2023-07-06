import Book from "./Book.js";
import {
    hanselAndGretel,
    harryPoterPhilosopherStone,
    sherlockHolmes,
} from "./BookObjects.js";

function updateBookCover(material, isPrinted, bookObj) {
    let selector = "div" + bookObj.id;
    let bookDivElem = document.querySelector(selector);

    bookObj.changeBookCover(material, isPrinted);

    bookDivElem.innerHTML = htmlMarkup(bookObj);
    console.log("Book cover type updated.");
}

function htmlMarkup(bookObj) {
    return `
        <h3 class="book-title">${bookObj.title}</h3>
        <ul>
            <li data="author">Author: ${bookObj.author}</li>
            <li data="publish-date">Published Date: ${bookObj.publishedDate}</li>
            <li data="edition">Edition: ${bookObj.edition}</li>
            <li data="num-of-pages">Number of Pages: ${bookObj.numOfPages}</li>
            <li data="cover-material">Cover Material: ${bookObj.coverType.material}</li>
        </ul>
    `;
}

function applyBookInfo(bookObj) {
    let infoArticleElem = document.querySelector("#book-info");

    let bookDivElem = document.createElement("div");
    bookDivElem.setAttribute("id", bookObj.id);
    bookDivElem.setAttribute("class", "info-list");
    bookDivElem.innerHTML = htmlMarkup(bookObj);

    infoArticleElem.appendChild(bookDivElem);

    console.info(`${bookObj.title} is appended.`);
}

applyBookInfo(hanselAndGretel);
applyBookInfo(harryPoterPhilosopherStone);
applyBookInfo(sherlockHolmes);
