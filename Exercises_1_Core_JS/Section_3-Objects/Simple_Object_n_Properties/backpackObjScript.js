const BackPack = {
    name: "Everyday Backpack",
    volume: 15,
    $numOfPockets: 5,
    hasLid: true,
    isLidOpen: false,
    strapLength: {
        left: 26,
        right: 26,
    },
    toggleLid: function (lidStatus) {
        if (this.hasLid === true) {
            this.isLidOpen = lidStatus;
        }
    },
    setStrapLength: function (right, left) {
        this.strapLength.left = left;
        this.strapLength.right = right;
    },
};

console.log("BackPack Obj:", BackPack);

console.log("BackPack name:", BackPack.name);

//  property names with special chars
console.log(`Num of Pockets: ${BackPack.$numOfPockets}`);

console.log(`[Num of Pockets]: ${BackPack["$numOfPockets"]}`);
