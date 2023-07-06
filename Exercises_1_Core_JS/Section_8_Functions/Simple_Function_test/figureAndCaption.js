const roseCandle = {
    modelId: "RS102",
    name: "Rose Pillar Candle",
    color: "Pink",
    height: 15,
    imagePath: "./resources/rose_candle.jpeg",
    imageDescription: "This is a Rose scented candle.",
};

const shortVanillaCandle = {
    modelId: "VN103",
    name: "Toasted Vanilla Pillar Candle",
    color: "Off-White",
    height: 10,
    imagePath: "./resources/short_vanilla_candle.jpeg",
    imageDescription: "This is a Vanilla scented candle.",
};

const candleObjArray = [roseCandle, shortVanillaCandle];

const createFigure = (candleObj) => {
    let figureElem = document.createElement("figure");
    let imgElem = document.createElement("img");
    let figCaptionElem = document.createElement("figcaption");

    imgElem.setAttribute("src", candleObj.imagePath);
    imgElem.setAttribute("alt", "taken from google images");
    figCaptionElem.innerHTML = candleObj.imageDescription;
    figureElem.append(imgElem, figCaptionElem);

    return figureElem;
};

const createArticleContent = (candleObj) => {
    let articleElem = document.createElement("article");
    let figureElem = createFigure(candleObj);

    articleElem.style.padding = "2rem";
    articleElem.appendChild(figureElem);

    return articleElem;
};

const applyMainContent = (candlesArr) => {
    let mainElem = document.querySelector("main");

    for (let candleObj of candlesArr) {
        let articleElem = createArticleContent(candleObj);
        mainElem.appendChild(articleElem);
    }
};
// applyMainContent(candleObjArray);

// create Figures using Array.map()

const createArticleElement_v2 = (candleFigureElem) => {
    let articleElem = document.createElement("article");
    articleElem.style.padding = "1rem";
    articleElem.appendChild(candleFigureElem);

    return articleElem;
};

const applyMainContent_v2 = (candleObjArr) => {
    let candleFigureElemArr = candleObjArr.map((candleObj) => {
        return createFigure(candleObj);
    });

    let mainElem = document.querySelector("main");

    candleFigureElemArr.forEach((figureElem) => {
        let articleElem = createArticleElement_v2(figureElem);
        mainElem.append(articleElem);
    });
};
applyMainContent_v2(candleObjArray);
