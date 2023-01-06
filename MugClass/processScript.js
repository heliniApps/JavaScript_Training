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

const main = document.createElement("main");
main.innerHTML = markup(mugObj);
document.body.appendChild(main);

applyColor(mugObj);

// mugObj.rePrint(true, "Line of Birds");
// updateMug(mugObj);

// mugObj.changeContents("Food", "Ice-Cream", false);
// updateMug(mugObj);
