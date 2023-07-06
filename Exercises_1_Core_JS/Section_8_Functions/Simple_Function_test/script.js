const height = 20;

const vanillaCandle = {
    modelId: "VN103",
    name: "Toasted Vanilla Pillar Candle",
    color: "Off-White",
    height: 10,
    changeHeight: (newHeight) => {
        this.height = newHeight; // this is changing the value of "window.height". Not the global "const height".
        console.log("Height inside method, after changing:", this.height);
    },
};

/* const getCandleMarkup = function (candleObj) {
    let articleElem = document.createElement("article");
    articleElem.innerHTML = `
        <h2>${candleObj.name}</h2>
        <ul>
            <li>Model ID: ${candleObj.modelId}</li>
            <li>Color: ${candleObj.color}</li>
            <li>Height: ${candleObj.height}</li>
        </ul>
    `;

    return articleElem;
}; */

const getCandleMarkup = (candleObj) => {
    let articleElem = document.createElement("article");
    articleElem.innerHTML = `
        <h2>${candleObj.name}</h2>
        <ul>
            <li>Model ID: ${candleObj.modelId}</li>
            <li>Color: ${candleObj.color}</li>
            <li>Height: ${candleObj.height}</li>
        </ul>
    `;

    return articleElem;
};

((candleObj) => {
    const mainElem = document.querySelector("main");
    const articleElem = getCandleMarkup(candleObj);
    console.info(articleElem);

    mainElem.insertAdjacentElement("afterbegin", articleElem);
})(vanillaCandle);

const changeHeightArrow = () => {
    vanillaCandle.changeHeight(15);
    console.info("new height:", vanillaCandle.height);
    console.info("global height:", height);
};
changeHeightArrow();

/* (function (candleObj) {
    const mainElem = document.querySelector("main");
    const articleElem = getCandleMarkup(candleObj);
    console.info(articleElem);

    mainElem.insertAdjacentElement("afterbegin", articleElem);
})(vanillaCandle); */

/* function getCandleMarkup(candleObj) {
    let articleElem = document.createElement("article");    // Can access a "function declaration" before declaring it.
    articleElem.innerHTML = `
        <h2>${candleObj.name}</h2>
        <ul>
            <li>Model ID: ${candleObj.modelId}</li>
            <li>Color: ${candleObj.color}</li>
            <li>Height: ${candleObj.height}</li>
        </ul>
    `;

    return articleElem;
} */

/* const getCandleMarkup = (candleObj) => {
    let articleElem = document.createElement("article");    // Cannot access arrow function before declaration
    articleElem.innerHTML = `
        <h2>${candleObj.name}</h2>
        <ul>
            <li>Model ID: ${candleObj.modelId}</li>
            <li>Color: ${candleObj.color}</li>
            <li>Height: ${candleObj.height}</li>
        </ul>
    `;

    return articleElem;
}; */
