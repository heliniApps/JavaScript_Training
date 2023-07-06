const htmlMarkup = (backpack) => {
    return `
        <div class="info-list">
            <h3>${backpack.name}</h3>
            <ul>
                <li>Color: ${backpack.color}</li>
                <li>Volume: ${backpack.volume}</li>
                <li>Lid Status: ${backpack.isLidOpen}</li>
                <li>Number of Pockets: ${backpack.pocketNum}</li>
                <li>Strap Length: 
                    <ul>
                        <li>Right: ${backpack.strapLength.right}</li>
                        <li>Left: ${backpack.strapLength.left}</li>
                    </ul>
                </li>
            </ul>
        </div>
    `;
};

const updateBackpackInfo = (backpack, message) => {
    let articleElem = document.querySelector("article[name='info-article']");
    articleElem.innerHTML = htmlMarkup(backpack);
    console.info("Status:", message);
};

export { updateBackpackInfo, htmlMarkup };
