/**
 * Changing HTML element styles and inner-html content through JS script.
 */

let color = "lightsalmon";

document.querySelector(".circles .left").style.backgroundColor = color;
document.querySelector(".circles .left .color-value").innerHTML = color;

function setBoxColor() {
    if (color === "lightsalmon") {
        let boxColor = "Dark Turquoise";

        document.querySelector(".boxes .left").style.backgroundColor = boxColor
            .toLowerCase()
            .replace(/\s/g, "");
        document.querySelector(".boxes .left .color-value").innerHTML =
            boxColor;
    }
}

setBoxColor();
