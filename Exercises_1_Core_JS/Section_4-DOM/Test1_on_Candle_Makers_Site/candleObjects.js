import Candle from "./Candle.js";
import Color from "./enums/Color.js";
import Occasion from "./enums/Occasion.js";
import {
    ColorType,
    ScentType,
    ShapeType,
    SurfaceDesign,
} from "./enums/Enums.js";

export const RoseCandle = new Candle(
    "RS102",
    "Pink Rose",
    ScentType.WoodlandRose,
    ColorType.SolidColor,
    Color.PalePink,
    ShapeType.Pillar,
    SurfaceDesign.Smooth,
    10,
    5,
    [Occasion.Christmas, Occasion.HomeDecor],
    "./resources/rose_candle.jpeg"
);

export const VanillaCandle = new Candle(
    "VN202",
    "Sweet Vanilla",
    ScentType.ToastedVanilla,
    ColorType.SolidColor,
    Color.OffWhite,
    ShapeType.Pillar,
    SurfaceDesign.Grooved,
    10,
    3,
    [Occasion.Christmas, Occasion.HomeDecor],
    "./resources/vanilla_candle.webp"
);
