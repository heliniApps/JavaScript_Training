import Candle from "./Candle.js";
import Backpack from "./Backpack.js";

// Rose candle using the class
const RoseCandle = new Candle(
    "P345",
    "Woodland Rose",
    "pale pink",
    "small",
    10,
    5,
    "cm",
    "pillar",
    "smooth",
    "2018-04-22 16:34:00"
);

const classicBackpack = new Backpack(
    "Classic Everyday Backpack",
    15,
    true,
    false,
    6,
    26,
    26,
    "2018-04-22 16:34:00"
);

// display info
console.log("RoseCandle:", RoseCandle);
console.log("classicBackpack:", classicBackpack);

console.log("RoseCandle.scent BEFORE:", RoseCandle.scent);
RoseCandle.changeScent("White Rose with Vanilla");
console.log("RoseCandle.scent AFTER:", RoseCandle.scent);

console.log("classicBackpack.isLidOpen BEFORE:", classicBackpack.isLidOpen);
classicBackpack.toggleLid(true);
console.log("classicBackpack.isLidOpen AFTER:", classicBackpack.isLidOpen);

console.log(
    "RoseCandle.isScentStillEffective():",
    RoseCandle.isScentStillEffective()
);

console.log("classicBackpack.getAgeInDays:", classicBackpack.getAgeInDays());
console.log("classicBackpack.getAgeInYears:", classicBackpack.getAgeInYears());
