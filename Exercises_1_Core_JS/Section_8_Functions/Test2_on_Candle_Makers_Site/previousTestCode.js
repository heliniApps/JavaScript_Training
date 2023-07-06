/* const applyAlternatingBgColor = (articleId, bgColor) => {
    let count = 0;
    let cssSelector = `article#${articleId} .candle-features li`;
    document.querySelectorAll(cssSelector).forEach((listNode) => {
        count++;
        if (count % 2 === 0) {
            listNode.style.backgroundColor = bgColor; // "#FFB6C5"
        }
    });
};

const createArticleElement = (candleObj) => {
    const articleElem = document.createElement("article");
    articleElem.classList.add("candle-article");
    articleElem.setAttribute("id", `${candleObj.modelId}`);
    articleElem.innerHTML = articleMarkup(candleObj);

    return articleElem;
};

const applyMainContent = (candleObj) => {
    let mainElem = document.querySelector(".main-content");
    let siteDescElem = createSiteDescriptionContent();
    mainElem.insertAdjacentElement("afterbegin", siteDescElem);

    let articleElem = createArticleElement(candleObj);
    mainElem.appendChild(articleElem);

    applyAlternatingBgColor(RoseCandle.modelId, "#FFC0C0");
};
applyMainContent(RoseCandle); */

// if (candleVolume < 423) {
//     return "Small";
// } else if (candleVolume >= 423 && candleVolume < 1507) {
//     return "Medium";
// } else if (candleVolume >= 1507) {
//     return "Large";
// } else {
//     return "Not Applicable";
// }

// if (this.size.height < 15) {
//     return "Small";
// } else if (this.size.height >= 15 && this.size.height < 30) {
//     return "Medium";
// } else if (this.size.height >= 30) {
//     return "Large";
// }

/* function getLastChildOfList() {
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
// attributesPractice(); */

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
