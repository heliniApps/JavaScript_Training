/**
 * Changing HTML element styles and inner-html content through JS script.
 */

let color = "lightsalmon";

document.querySelector(".circles .left").style.backgroundColor = color;
document.querySelector(".circles .left .color-value").innerHTML = color;

function setBoxColor() {
    if (color === "lightsalmon") {
        let boxColor = "darkturquoise";
        document.querySelector(".boxes .left").style.backgroundColor = boxColor;
    }
}

setBoxColor();
