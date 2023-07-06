const BackPack = {
    name: "Classic Backpack",
    volume: 15,
    color: "Grey",
    pocketNum: 5,
    isLidOpen: false,
    strapLength: {
        left: 26,
        right: 26,
    },
    setStrapLength: function (left, right) {
        this.strapLength.left = left;
        this.strapLength.right = right;
        updateBackpackInfo(this, "Strap Length updated.");
    },
    toggleLid: function (lidOpenStatus) {
        this.isLidOpen = lidOpenStatus;
        updateBackpackInfo(this, "Lid status updated.");
    },
};

const updateBackpackInfo = (backpack, message) => {
    let articleElem = document.querySelector("article[name='info-article']");
    articleElem.innerHTML = htmlMarkup(backpack);
    console.info(message);
};

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

function applyMainContent(backpack) {
    let infoArticleElem = document.querySelector(
        "article[name='info-article'][data='list']"
    );
    infoArticleElem.innerHTML = htmlMarkup(backpack);
}
applyMainContent(BackPack);
