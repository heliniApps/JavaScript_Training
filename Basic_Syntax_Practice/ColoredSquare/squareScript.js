/**
 * Testing 'var', 'let' and scope.
 * CSS styles referred from LinkedIn/JavaScript Essential Training Course content.
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

function setTitleColor(color) {
    let titleColor = "gold";
    if (color !== "cyan") {
        titleColor = "lightseagreen";
    }
    document.querySelector(".title").style.color = titleColor;
}

setTitleColor(color);
