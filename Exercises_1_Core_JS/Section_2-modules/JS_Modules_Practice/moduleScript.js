import { default as BackPack } from "./backpack.js";
import { htmlMarkup } from "./util.js";

function applyMainContent(backpack) {
    let infoArticleElem = document.querySelector(
        "article[name='info-article']"
    );
    infoArticleElem.innerHTML = htmlMarkup(backpack);
}

applyMainContent(BackPack);

// BackPack.toggleLid(true);
