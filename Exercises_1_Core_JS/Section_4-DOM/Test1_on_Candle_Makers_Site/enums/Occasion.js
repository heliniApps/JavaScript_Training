class Occasion {
    static Christmas = new Occasion("Christmas");
    static Birthday = new Occasion("Birthday");
    static HomeDecor = new Occasion("Home Decor");
    static Wedding = new Occasion("Wedding");
    static TeaLight = new Occasion("Tealight");

    constructor(name) {
        this.name = name;
    }
}

export default Occasion;
