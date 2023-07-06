import candleObjectArray from "./candleObjects.js";
import Occasion from "./enums/Occasion.js";
import Color from "./enums/Color.js";

console.log(candleObjectArray);

// Site Header
const applyNavMenuItemMarkup = (dataValue, linkText) => {
    return `
        <li data-nav-item="${dataValue}">
            <a href="#">${linkText}</a>
        </li>
    `;
};

const generateNavMenuItems = () => {
    let listElem = null;
    let allListItems = applyNavMenuItemMarkup("Home", "Home");

    Object.keys(Occasion).forEach((key) => {
        listElem = applyNavMenuItemMarkup(key, Occasion[key].name);
        allListItems = allListItems + listElem;
    });

    return allListItems;
};

const createNavigationMenu = () => {
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
};

const applyHeaderContent = () => {
    let headerElem = document.querySelector(".site-header");
    let navMenuElem = createNavigationMenu();

    headerElem.appendChild(navMenuElem);
};
applyHeaderContent();

// Site Main Content
const createSiteDescriptionContent = () => {
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

    descDivElem.append(headingElem, paraElem);

    return descDivElem;
};

const createUpdateForm = (candleObj, typeOfData, placeholderText) => {
    let updateFormMarkup = `
        <div class="candle-size-update" data-value="${typeOfData}">
            <form>
                <input type="number" placeholder="${placeholderText}" />
                <button type="submit">Update</button>
            </form>
        </div>
    `;

    return updateFormMarkup;
};

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
            ${createUpdateForm(candleObj, "height", "New candle height.")}
            <li class="candle-radius">Base Radius: <span>${
                candleObj.size.radius
            }</span></li>
            ${createUpdateForm(candleObj, "radius", "New base-radius.")}
            <li class="candle-size-category">Category: <span>${candleObj.getSizeCategory()}</span></li>
            <li class="candle-occasion">Suitable For: <span>${
                candleObj.listOfOccasions[1].name
            }</span></li>
        </ul>
    `;
};

const getListItemBgColor = (candleColor) => {
    let bgColor = null;
    switch (candleColor) {
        case Color.OffWhite:
            bgColor = "#FEFBEA";
            break;
        case Color.PalePink:
            bgColor = "#FFC0C0";
            break;
        default:
            bgColor = "white";
            break;
    }
    return bgColor;
};

const applyAlternatingBgColor = (articleElem, candleObj) => {
    let count = 0;
    let bgColor = getListItemBgColor(candleObj.color.values);
    let defaultColor = "#f4f0ec";
    let cssSelector = `.candle-features li`;

    articleElem.querySelectorAll(cssSelector).forEach((listNode) => {
        count++;
        if (count % 2 !== 0) {
            listNode.style.backgroundColor = bgColor;
        } else {
            listNode.style.backgroundColor = defaultColor;
        }
    });
};

const updateSizeValues = (event, formElem, typeOfData, candleObj) => {
    let inputElem = formElem.querySelector("input");
    let newInputValue = inputElem.value;
    let candleFeatureList = null;

    event.path.forEach((element) => {
        if (element.classList !== null && element.classList !== undefined) {
            if (element.classList.contains("candle-features")) {
                candleFeatureList = element;
            }
        }
    });

    switch (typeOfData) {
        case "height":
            // change Object's property value.
            candleObj.changeHeight(newInputValue);
            // change screen display value.
            let heightListItem = candleFeatureList.querySelector(
                ".candle-height span"
            );
            heightListItem.innerHTML = newInputValue;
            break;

        case "radius":
            candleObj.changeRadius(newInputValue);
            let radiusListItem = candleFeatureList.querySelector(
                ".candle-radius span"
            );
            radiusListItem.innerHTML = newInputValue;
            break;
    }

    // update size category
    let sizeCategoryListItem = candleFeatureList.querySelector(
        ".candle-size-category span"
    );
    sizeCategoryListItem.innerHTML = candleObj.getSizeCategory();
};

const attachFormSubmitListener = function (articleElem, candleObj) {
    let formElements = articleElem.querySelectorAll(".candle-size-update form");

    for (let form of formElements) {
        form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();
                updateSizeValues(
                    event,
                    form,
                    form.parentElement.getAttribute("data-value"),
                    candleObj
                );
            },
            false
        );
    }
};

const createArticleElement = (candleObj) => {
    const articleElem = document.createElement("article");
    articleElem.classList.add("candle-article");
    articleElem.setAttribute("id", `${candleObj.modelId}`);

    articleElem.innerHTML = articleMarkup(candleObj);

    applyAlternatingBgColor(articleElem, candleObj);
    attachFormSubmitListener(articleElem, candleObj);

    return articleElem;
};

const applyMainContent = (candleObjArr) => {
    let mainElem = document.querySelector(".main-content");
    let siteDescElem = createSiteDescriptionContent();
    mainElem.insertAdjacentElement("afterbegin", siteDescElem);

    let articleElemArr = candleObjArr.map((candleObj) => {
        return createArticleElement(candleObj);
    });

    articleElemArr.forEach((articleElem) => {
        mainElem.appendChild(articleElem);
    });
};
applyMainContent(candleObjectArray);
