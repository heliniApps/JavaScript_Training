class Color {
    static White = new Color("White");
    static OffWhite = new Color("Off-White");
    static PalePink = new Color("Pale Pink");
    static BrightPink = new Color("Pink");
    static OceanGreen = new Color("Ocean Green");
    static Red = new Color("Red");
    static Yellow = new Color("Yellow");

    constructor(name) {
        this.name = name;
    }
}

export default Color;
