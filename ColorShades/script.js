const getColorNames = () => {
    const colorNamesMap = new Map([
        ["Mauve", "#E0B0FF"],
        ["Indigo", "#4B0082"],
        ["Pale Purple", "#FAE6FA"],
        ["Dark Magenta", "#8B008B"],
        ["Liserian Purple", "#DE6FA1"],
        ["Orchid", "#DA70D6"],
        ["Thistle", "#D8BFD8"],
        ["True Purple", "#6A0DAD"],
        ["Fairy Tale", "#F2C1D1"],
    ]);

    return colorNamesMap;
};

function createRowDiv(rowCount) {
    let rowId = `boxRow${rowCount}`;
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("id", rowId);
    rowDiv.setAttribute("class", "row-div");

    return rowDiv;
}

function createBoxDiv(colorName, colorHex) {
    let coloredBoxDiv = document.createElement("div");
    coloredBoxDiv.setAttribute("class", "colored-box");

    let styleAttrValue = `background-color: ${colorHex.trim()};`;
    coloredBoxDiv.setAttribute("style", styleAttrValue.trim());

    coloredBoxDiv.addEventListener(
        "click",
        () => alert(`This color is "${colorName}"`),
        false
    );
    return coloredBoxDiv;
}

function appendColoredRows(articleElem) {
    let rowCount = 0;
    let coloredBoxCount = 0;
    let rowDiv = null;
    let isNewRow = false;
    let colorNames = getColorNames();

    colorNames.forEach((colorHex, colorName) => {
        isNewRow = coloredBoxCount % 3 === 0;
        if (isNewRow) {
            rowCount++;
            rowDiv = createRowDiv(rowCount);
        }

        let boxDiv = createBoxDiv(colorName, colorHex);
        rowDiv.append(boxDiv);
        if (isNewRow) {
            articleElem.append(rowDiv);
        }
        coloredBoxCount++;
    });
    return articleElem;
}

function changeBodyBackground() {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.toggle("active-canvas");
}

function changeHeadingStyle() {
    let headingElem = document.querySelector('h1 span[data-name="word1"]');
    headingElem.classList.toggle("h1-color");
}

const processEventKeyDown = (event) => {
    let eventKeyCode = event.code;
    switch (eventKeyCode.trim().toLowerCase()) {
        case "keyb":
            changeBodyBackground();
            break;
        case "keyp":
            changeHeadingStyle();
            break;
        default:
            break;
    }
};

function createMainArticle() {
    let main = document.querySelector("main");
    let article = document.createElement("article");
    article = appendColoredRows(article);

    main.append(document.createElement("br"));
    main.append(article);

    window.addEventListener("keydown", processEventKeyDown, false);
}

createMainArticle();
