/**
 * This script defines Backpack objects and display properties, apply styles.
 */

import Backpack from "./Backpack.js";

const greenBackpack = new Backpack("Frog Pack", "Light Green", 30, 5);

const blueBackpack = new Backpack("Cloud Pack", "Sky Blue", 20, 4);

const cleanColorName = function (colorName) {
    if (typeof colorName !== "string") {
        console.log("Invalid color name.");
        return;
    }
    colorName = colorName.toLowerCase().trim();
    colorName = colorName.replace(/\s/g, "");

    return colorName;
};

function generateBackpackMarkup(currentBackpack) {
    let articleElem = document.createElement("article");
    let articleClassName = `${cleanColorName(
        currentBackpack.color
    )}-backpack-article`;
    articleElem.classList.add(articleClassName);

    let markupStr = `
        <h2 class="title-backpack-prop" data-name="backpack_name">
            ${currentBackpack.name}
        </h2>
        <ul>
            <li class="backpack-prop" data-color="backpack_color"> Backpack Color:
                <span>${currentBackpack.color}</span>
            </li>
            <li class="backpack-prop" data-volume="backpack_volume"> Volume:
                <span>${currentBackpack.volume} l</span>
            </li>
            <li class="backpack-prop" data-pocketNum="backpack_pocketNum"> Number of Pockets:
                <span>${currentBackpack.pocketNumber}</span>
            </li>
        </ul>
    `;
    articleElem.innerHTML = markupStr;

    return articleElem;
}

const createMainElement = function () {
    let mainElem = document.createElement("main");
    let divElem = document.createElement("div");
    divElem.classList.add("backpack-article-div");

    mainElem.appendChild(divElem);
    document.body.appendChild(mainElem);
};

const getArticleDiv = () => {
    return document.querySelector("main .backpack-article-div");
};

const appendArticle = function (articleElem) {
    let divElem = getArticleDiv();
    if (articleElem === null || divElem === null) {
        return;
    }
    divElem.append(articleElem);
    console.log("Div with new article:", divElem);
};

const applyStyles = function () {
    let allArticles = document.querySelectorAll(
        "main .backpack-article-div article"
    );

    if (allArticles !== null) {
        allArticles.forEach((article) => {
            let articleClassList = article.classList;

            articleClassList.forEach((className) => {
                if (className.includes("-backpack-article")) {
                    let firstHyphIdx = className.indexOf("-");
                    let colorName = className.substring(0, firstHyphIdx);
                    article.style.backgroundColor = cleanColorName(colorName);
                }
            });
        });
    }
};

(function () {
    createMainElement();

    let article = generateBackpackMarkup(greenBackpack);
    appendArticle(article);
    article = generateBackpackMarkup(blueBackpack);
    appendArticle(article);

    applyStyles();
})();
