import Candle from "./Candle.js";
import Color from "./enums/Color.js";
import Occasion from "./enums/Occasion.js";
import {
    ColorType,
    ScentType,
    ShapeType,
    SurfaceDesign,
} from "./enums/Enums.js";

const RoseCandle = new Candle(
    "RS102",
    "Pink Rose",
    ScentType.WoodlandRose,
    ColorType.SolidColor,
    Color.PalePink,
    ShapeType.Pillar,
    SurfaceDesign.Smooth,
    10,
    3,
    [Occasion.Christmas, Occasion.HomeDecor],
    "./resources/rose_candle.jpeg"
);

const VanillaCandle = new Candle(
    "VN202",
    "Vanilla Cream",
    ScentType.ToastedVanilla,
    ColorType.SolidColor,
    Color.OffWhite,
    ShapeType.Pillar,
    SurfaceDesign.Grooved,
    20,
    4,
    [Occasion.Wedding, Occasion.Christmas],
    "./resources/vanilla_candle.webp"
);

const candleObjectArray = [RoseCandle, VanillaCandle];

export default candleObjectArray;
