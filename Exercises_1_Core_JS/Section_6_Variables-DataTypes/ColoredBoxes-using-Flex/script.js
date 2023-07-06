var color = "pink";
let rightColor = "goldenrod";
// globalvar = "hello";

const applyBoxColors = () => {
    var color = "darkred";
    // let rightColor = "blue";

    let boxElem = document.querySelector(".box.left-box");
    boxElem.style.backgroundColor = "purple";

    let boxElemColorSpan = boxElem.querySelector(".color-value");
    boxElemColorSpan.innerHTML = color;
    boxElemColorSpan.style.color = color;

    boxElem = document.querySelector(".box.right-box");
    boxElem.style.backgroundColor = rightColor;
    boxElem.querySelector("span.color-value").innerHTML = rightColor;
};
applyBoxColors();

console.log("color:", color);
console.log("rightColor:", rightColor);

function dataTypePractice() {
    let testVar = "This is a string";
    console.log(typeof testVar);

    testVar = undefined;
    console.log("undefined:", typeof testVar);

    testVar = null;
    console.log("null:", typeof testVar);
}
dataTypePractice();
