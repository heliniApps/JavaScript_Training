import { RoseCandle } from "./candleObjects.js";
// import Color from "./enums/Color.js";
import Occasion from "./enums/Occasion.js";
// import Candle from "./Candle.js";
// import {
//     ColorType,
//     ScentType,
//     ShapeType,
//     SurfaceDesign,
// } from "./enums/Enums.js";

console.log(RoseCandle);

const articleMarkup = (candleObj) => {
    return `
        <figure class="candle-image">
            <img src="${candleObj.imagePath}" alt="Reference: google images" />
        </figure>
        <h2 class="candle-name">${candleObj.name}</h2>
        <ul class="candle-features">
            <li class="candle-prop candle-scent-type">Scent: <span>${
                candleObj.scentType
            }</span></li>
            <li class="candle-prop candle-color-value">Color: <span>${
                candleObj.color.values.name
            }</span></li>
            <li class="candle-prop candle-shape">Shape: <span>${
                candleObj.shape.type
            }</span></li>
            <li class="candle-surface-design">Design: <span>${
                candleObj.shape.surfaceDesign
            }</span></li>
            <li class="candle-height">Height: <span>${
                candleObj.size.height
            }</span></li>
            <li class="candle-size-category">Category: <span>${candleObj.getSizeCategory()}</span></li>
            <li class="candle-occasion">Suitable For: <span>${
                candleObj.listOfOccasions[1].name
            }</span></li>
        </ul>
    `;
};

function applyHeaderContent() {
    let headerElem = document.querySelector(".site-header");
    let navMenuElem = createNavigationMenu();

    headerElem.appendChild(navMenuElem);
}
applyHeaderContent();

function applyMainContent(candleObj) {
    let mainElem = document.querySelector(".main-content");
    let siteDescElem = createSiteDescriptionContent();
    let articleElem = createArticleElement(candleObj);

    mainElem.insertAdjacentElement("afterbegin", siteDescElem);
    mainElem.appendChild(articleElem);
}
applyMainContent(RoseCandle);

function createArticleElement(candleObj) {
    const articleElem = document.createElement("article");
    articleElem.classList.add("candle-article");
    articleElem.setAttribute("id", `${candleObj.modelId}`);
    articleElem.innerHTML = articleMarkup(candleObj);

    return articleElem;
}

function createSiteDescriptionContent() {
    let titleText = "Our Candles...";
    let descriptionText = `We make candles of various <span>colors</span> and <span>shapes</span>, 
                        for <em>every occasion</em>.`;

    const descDivElem = document.createElement("div");
    descDivElem.classList.add("main-content-description");

    const headingElem = document.createElement("h2");
    headingElem.classList.add("main-content-description-title");
    headingElem.innerHTML = titleText;

    const paraElem = document.createElement("p");
    paraElem.classList.add("main-content-description-para");
    paraElem.innerHTML = descriptionText;
    paraElem
        .querySelectorAll("span")
        .forEach((elem) => (elem.style.color = "brown"));

    descDivElem.insertAdjacentElement("afterbegin", headingElem);
    descDivElem.appendChild(paraElem);

    return descDivElem;
}

function createNavigationMenu() {
    let navMenuMarkup = `
        <nav class="nav-menu">
            <ul class="nav-menu-items">
                ${generateNavMenuItems()}
            </ul>
        </nav>
    `;
    const navMenuDiv = document.createElement("div");
    navMenuDiv.classList.add("site-header-navigation");
    navMenuDiv.innerHTML = navMenuMarkup;

    return navMenuDiv;
}

function generateNavMenuItems() {
    let listElem = null;
    let allListItems = applyNavMenuItemMarkup("Home", "Home");

    Object.keys(Occasion).forEach((key) => {
        listElem = applyNavMenuItemMarkup(key, Occasion[key].name);
        allListItems = allListItems + listElem;
    });

    return allListItems;
}

function applyNavMenuItemMarkup(dataValue, linkText) {
    return `
        <li data<-nav-item="${dataValue}">
            <a href="#">${linkText}</a>
        </li>
    `;
}

function getLastChildOfList() {
    let lastChild = document.querySelector(".candle-features li:last-child");
    console.log("lastListChild:", lastChild);

    lastChild.style.backgroundColor = "rgba(213, 155, 191, 0.685)";
}
// getLastChildOfList();

function getNthChild() {
    let nthChild = document.querySelector(".candle-features li:nth-child(4)");
    nthChild.style.backgroundColor = "#F6ADC6";
}
// getNthChild();

function alternateAllChildNodes(articleId) {
    let count = 0;
    let cssSelector = `article#${articleId} .candle-features li`;
    document.querySelectorAll(cssSelector).forEach((listNode) => {
        count++;
        if (count % 2 !== 0) {
            listNode.style.backgroundColor = "#FFC0C0"; // "#FFB6C5"
        }
    });
}
alternateAllChildNodes(RoseCandle.modelId);

function oldElementSelectorFunctions() {
    let articleElem = document.getElementById("RS102");
    console.log("articleElem:", articleElem);

    let propElements = document.getElementsByClassName("candle-prop");
    console.log("candle-prop:", propElements);
}
// oldElementSelectorFunctions();

function differentQuerySelectors() {
    let cssSelector = `article#${RoseCandle.modelId}`;
    let articleElemFromId = document.querySelector(cssSelector);
    console.log("articleElemFromId:", articleElemFromId);

    cssSelector = ".candle-features .candle-prop.candle-color-value";
    let propElements2 = document.querySelectorAll(cssSelector);
    console.log("propElements2:", propElements2);

    let colorListElem = document.querySelector(
        "article#RS102 .candle-features li:nth-child(2)"
    );
    console.log("colorListElem:", colorListElem);

    let colorSpan = colorListElem.querySelector("span");
    console.log("colorSpan:", colorSpan);
}
// differentQuerySelectors();

function classListFunctionsPractice() {
    let cssSelector = `article#${RoseCandle.modelId}`;
    let firstListElem = document.querySelector(
        cssSelector + " .candle-features li:first-child"
    );
    console.log("class list: ", firstListElem.classList);

    console.log(firstListElem.classList.contains("candle-prop"));
    console.log(firstListElem.classList.contains("prop"));

    let newProp = "first-candle-prop";
    let propArr = ["a", "b", "c"];
    firstListElem.classList.add(newProp);
    firstListElem.classList.remove(newProp);

    firstListElem.classList.add(propArr); // ans: <other classes> a,b,c

    firstListElem.classList.add(newProp);
    firstListElem.classList.replace(newProp, "replaced-prop");

    firstListElem.classList.toggle("replaced-prop");
    firstListElem.classList.toggle("a");
}
// classListFunctionsPractice();

function attributesPractice() {
    let multiElements = document.querySelectorAll(".candle-features li");
    let attrOfAllElemts = multiElements.attributes; // No property called "attributes" for "querySelectorAll()".
    console.log("attrOfAllElemts:", attrOfAllElemts); // ans:  undefined

    let colorSpan = document.querySelector(
        "article#RS102 .candle-features li:nth-child(2) span"
    );
    console.log("colorSpan:", colorSpan);

    colorSpan.setAttribute("data-color", colorSpan.innerHTML);
    colorSpan.style.color = "pink";
}
// attributesPractice();

/* RoseCandle.changeName("Bush Rose");
RoseCandle.changeColor(ColorType.MultiColor, Color.OceanGreen);

console.log(RoseCandle);

RoseCandle.changeScentType(ScentType.OceanBreeze);

RoseCandle.changeHeight(20);
RoseCandle.changeRadius("");
RoseCandle.changeName("");
RoseCandle.changeRadius(3);

RoseCandle.changeShape(ShapeType.RoseFlower, SurfaceDesign.Grooved);

RoseCandle.changeListOfOccasions([Occasion.TeaLight, "Occasion.Wedding"]); */
