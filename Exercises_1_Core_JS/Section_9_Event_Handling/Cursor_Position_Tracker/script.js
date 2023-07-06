const clickMeButton = document.querySelector(".click-me-btn");
const posX = document.querySelector(".pos-x span");
const posY = document.querySelector(".pos-y span");
const container = document.querySelector(".container");
const body = document.body;

/* const buttonClickListener = () => {
    clickMeButton.classList.toggle("active");
    console.info("button clicked!");
}; */
const buttonClickListener = function () {
    this.classList.toggle("active");
};
clickMeButton.addEventListener("click", buttonClickListener, false);

const buttonMouseHoverListener = (event) => {
    clickMeButton.classList.toggle("grey");
};
clickMeButton.addEventListener("mouseover", buttonMouseHoverListener, false);
clickMeButton.addEventListener("mouseleave", buttonMouseHoverListener, false);

const cursorPositionListener = (event) => {
    posX.innerHTML = event.pageX;
    posY.innerHTML = event.pageY;
};
window.addEventListener("mousemove", cursorPositionListener, false);

const containerListener = (event) => {
    switch (event.type.trim()) {
        case "mouseenter":
            container.classList.add("blue");
            body.style.backgroundColor = "cornsilk";
            break;
        case "mouseleave":
            container.classList.remove("blue");
            body.style.backgroundColor = "white";
            break;
    }
};
container.addEventListener("mouseenter", containerListener, false);
container.addEventListener("mouseleave", containerListener, false);

body.addEventListener(
    "keypress",
    (event) => {
        console.log("event.key:", event.key);
        switch (event.key) {
            case "h":
                body.style.backgroundColor = "cornflowerblue";
                break;
            case "y":
                body.style.backgroundColor = "white";
                break;
            default:
                body.style.backgroundColor = "white";
                break;
        }
    },
    false
);
