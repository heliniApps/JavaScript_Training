const VanillaCandle = {
    color: "off-white",
    isScented: true,
    scent: "Toasted Vanilla",
    height: {
        value: 10,
        unit_meas: "cm",
    },
    style: {
        surface: "smooth",
        vertical: "small pillar",
    },
};

const PinkCandle = {
    color: "pale-pink",
    isScented: false,
    scent: null,
    height: {
        value: 10,
        unit_meas: "cm",
    },
    style: {
        surface: "grooved",
        vertical: "small pillar",
    },
};

console.log("Vanilla Candle:", VanillaCandle);

console.log(
    `height: ${VanillaCandle.height.value} ${VanillaCandle.height.unit_meas}`
);

if (PinkCandle.isScented === true) {
    console.log("PinkCandle.scent:", PinkCandle.scent);
}

// methods

const PlainCandle = {
    modelId: "P234",
    color: "white",
    scent: null,
    size: {
        type: "small",
        height: 10,
        radius: 5,
        unit_meas: "cm",
    },
    style: {
        shape: "pillar",
        surface: "smooth",
    },
    isScented: function () {
        if (this.scent !== null && this.scent !== "") {
            return true;
        }
        return false;
    },
    changeScent: function (scent) {
        this.scent = scent;
    },
    changeHeight: function (height) {
        this.size.height = height;
    },
};

console.log("Plain Candle Obj:", PlainCandle);
console.log("Is scented: ", PlainCandle.isScented());

if (PlainCandle.isScented()) {
    PlainCandle.changeScent("Raspberry Lemonade");
} else {
    PlainCandle.changeScent("Woodland Rose");
}
console.log("PlainCandle.scent:", PlainCandle.scent);
