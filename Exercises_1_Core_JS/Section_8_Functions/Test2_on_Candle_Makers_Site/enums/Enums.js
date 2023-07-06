const ScentType = Object.freeze({
    Unscented: "Unscented",
    WoodlandRose: "Woodland Rose",
    ToastedVanilla: "Toasted Vanilla",
    OceanBreeze: "Ocean Breeze",
    WildBerry: "Wild Berry",
});

const ColorType = Object.freeze({
    SolidColor: "solid_color",
    MultiColor: "multi_color",
});

const ShapeType = Object.freeze({
    Carved: "Carved",
    Pillar: "Pillar",
    Triangle: "Triangle",
    KnottedLoop: "Knotted Loop",
    RoseFlower: "Rose Flower",
});

const SurfaceDesign = Object.freeze({
    Smooth: "Smooth",
    Grooved: "Grooved",
    ZigzagGrooved: "Zig-Zag Grooved",
    CarvedSwan: "Swan-Carved",
    CarvedButterfly: "Butterfly-Carved",
});

export { ColorType, ShapeType, SurfaceDesign, ScentType };
