import Mug from "./Mug.js";
import { applyColor, markup, updateMug } from "./DisplayMug.js";

const mugObj = new Mug(
    12,
    "Basic Cylinder",
    "Half-Moon",
    "Ceramic",
    250,
    "Orange",
    "Aquamarine",
    false,
    null,
    true,
    "food",
    "Tea",
    true
);

function populateMainElement() {
    const main = document.createElement("main");
    main.innerHTML = markup(mugObj);
    document.body.appendChild(main);
}
populateMainElement();

applyColor(mugObj);

// mugObj.rePrint(true, "Line of Birds");
// updateMug(mugObj);

// mugObj.changeContents("Food", "Ice-Cream", false);
// updateMug(mugObj);

function testStyleClassesAndAttributes() {
    let spanQuery = document.querySelector("main li span");
    if (spanQuery === null) {
        return;
    }
    let spanClassList = spanQuery.classList;
    console.log("spanClassList:", spanClassList);

    if (spanClassList.length <= 0) {
        spanQuery.classList.add("volume-span-style");
    }

    let lastChildQuery = document.querySelector("main li:last-child");
    console.log("lastChildQuery:", lastChildQuery);

    if (lastChildQuery !== null) {
        lastChildQuery.setAttribute("data-mug-detail", "lastElement");
    }
}
testStyleClassesAndAttributes();
