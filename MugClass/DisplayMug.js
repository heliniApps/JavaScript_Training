/**
 * Provides utility constants to display the properties of the Mug,
 * on the web page.
 */

const markup = (mugObj) => {
    let htmlMarkupStr = `
    <div>
        <h3>Details of the Mug Id: ${mugObj.mugId}</h3>
        <ul>
            <li>Shape: ${mugObj.bodyShape}</li>
            <li>Handle Shape: ${mugObj.handleShape}</li>
            <li>Material: ${mugObj.material}</li>
            <li>Volume: ${mugObj.volume} ml</li>
            <li>Design: </li>
            ${
                mugObj.design.isPrinted
                    ? `<ul>
                            <li>
                                Print Description: ${mugObj.design.printDescription}
                            </li>
                        </ul>`
                    : `<ul>
                            <li>
                                Outside Color:
                                <code class="outside-color">
                                    ${mugObj.design.color.outside}
                                </code>
                            </li>
                            <li>
                                Inside Color:
                                <code class="inside-color">
                                    ${mugObj.design.color.inside}
                                </code>
                            </li>
                        </ul>`
            }
            ${
                mugObj.contents.hasContent
                    ? `<li>Contents in the Mug: </li>
                        <ul>
                            <li>Description: ${mugObj.contents.description}</li>
                            <li>Is it Hot or Cold? 
                                <code class="contentTemp">
                                    ${mugObj.contents.isHot ? "Hot" : "Cold"}
                                </code>
                            </li>
                        </ul>`
                    : `<li>Mug is empty.</li>`
            }
        </ul> 
    </div>`;

    return htmlMarkupStr;
};

const updateMug = (updatedMugObj) => {
    let mainElem = document.querySelector("main");
    mainElem.innerHTML = markup(updatedMugObj);
    applyColor(updatedMugObj);
    console.log("Mug details have been updated.");
};

function applyColor(mugObj) {
    if (!mugObj.design.isPrinted) {
        let outsideColor = mugObj.design.color.outside.toString().toLowerCase();
        let insideColor = mugObj.design.color.inside.toString().toLowerCase();

        let outsideColorElem = document.querySelector(".outside-color");
        let insideColorElem = document.querySelector(".inside-color");

        outsideColorElem.style.fontSize = "1rem";
        insideColorElem.style.fontSize = "1rem";

        if (outsideColor != "white") {
            outsideColorElem.style.color = outsideColor;
        }
        if (insideColor != "white") {
            document.querySelector(".inside-color").style.color = insideColor;
        }
    }

    if (mugObj.contents.hasContent) {
        let contentTempElem = document.querySelector(".contentTemp");
        contentTempElem.style.fontSize = "1rem";
        contentTempElem.style.color = mugObj.contents.isHot ? "red" : "skyblue";
    }
}

export { markup, updateMug, applyColor };
