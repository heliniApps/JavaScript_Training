function changeCodeElements() {
    const allCodeElemts = document.querySelectorAll("code");

    for (let elem of allCodeElemts) {
        if (
            elem.getAttribute("data") !== null &&
            elem.getAttribute("data").toLowerCase() === "script-tag"
        ) {
            elem.setAttribute("style", "background-color: skyblue");
        } else {
            elem.setAttribute("style", "background-color: plum");
        }

        elem.innerHTML = `&lt;${elem.innerHTML}&gt;`;
    }
}

changeCodeElements();
