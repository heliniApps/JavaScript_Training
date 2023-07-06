import Color from "./enums/Color.js";
import Occasion from "./enums/Occasion.js";
import {
    ScentType,
    ColorType,
    ShapeType,
    SurfaceDesign,
} from "./enums/Enums.js";

class Candle {
    constructor(
        modelId,
        name,
        scentType,
        colorType,
        colorValue,
        shapeType,
        surfaceDesign,
        sizeHeight,
        sizeRadius,
        listOfOccasions,
        imagePath
    ) {
        this.modelId = modelId;
        this.name = name;
        this.scentType = scentType;
        this.color = {
            type: colorType,
            values: colorValue,
        };
        this.shape = {
            type: shapeType,
            surfaceDesign: surfaceDesign,
        };
        this.size = {
            height: sizeHeight,
            radius: sizeRadius,
        };
        this.listOfOccasions = listOfOccasions;
        this.imagePath = imagePath;
    }

    #setName(name) {
        this.name = name;
    }
    #setScentType(scentType) {
        this.scentType = scentType;
    }
    #setColor(colorType, colorValue) {
        this.color.type = colorType;
        this.color.values = colorValue;
    }
    #setShape(shapeType, surfaceDesign) {
        this.shape.type = shapeType;
        this.shape.surfaceDesign = surfaceDesign;
    }
    #setSize(height, radius) {
        this.size.height = height;
        this.size.radius = radius;
    }
    #setListOfOccasions(listOfOccasions) {
        this.listOfOccasions = listOfOccasions;
    }
    #setImage(imagePath) {
        this.imagePath = imagePath;
    }

    changeName(name) {
        if (name !== null && name !== "") {
            this.#setName(name);
        }
    }

    changeScentType(scentType) {
        Object.keys(ScentType).forEach((key) => {
            if (scentType === ScentType[key]) {
                this.#setScentType(scentType);
            }
        });
    }

    changeColor(colorType, colorValue) {
        let isValidColorType = false;
        let isValidColorValue = false;

        Object.keys(ColorType).forEach((key) => {
            if (colorType === ColorType[key]) {
                isValidColorType = true;
            }
        });
        Object.keys(Color).forEach((key) => {
            if (colorValue === Color[key]) {
                isValidColorValue = true;
            }
        });

        if (isValidColorType && isValidColorValue) {
            this.#setColor(colorType, colorValue);
        }
    }

    changeShape(shapeType, surfaceDesign) {
        let isValidShapeType = false;
        let isValidSurfaceDesign = false;

        Object.keys(ShapeType).forEach((key) => {
            if (shapeType === ShapeType[key]) {
                isValidShapeType = true;
            }
        });
        Object.keys(SurfaceDesign).forEach((key) => {
            if (surfaceDesign === SurfaceDesign[key]) {
                isValidSurfaceDesign = true;
            }
        });

        if (isValidShapeType && isValidSurfaceDesign) {
            this.#setShape(shapeType, surfaceDesign);
        }
    }

    changeHeight(height) {
        if (height === null || height <= 0) {
            console.info("Invalid height.");
            return;
        }
        this.#setSize(height, this.size.radius);
    }

    changeRadius(radius) {
        if (radius === null || radius <= 0) {
            console.info("Invalid radius.");
            return;
        }
        this.#setSize(this.size.height, radius);
    }

    changeListOfOccasions(listOfOccasions) {
        let isValid = true;
        let isValidOccasion = false;

        for (let item of listOfOccasions) {
            isValidOccasion = false;
            Object.keys(Occasion).forEach((key) => {
                if (item === Occasion[key]) {
                    isValidOccasion = true;
                }
            });
            isValid = isValid && isValidOccasion;
        }

        if (isValid) {
            this.#setListOfOccasions(listOfOccasions);
        }
    }

    chageImagePath(imagePath) {
        this.#setImage(imagePath);
    }

    isScented() {
        if (
            this.scentType !== ScentType.Unscented &&
            this.scentType !== null &&
            this.scentType !== ""
        ) {
            return true;
        }
        return false;
    }

    #calcVolume() {
        const pi = 3.14;
        let baseArea = pi * this.size.radius * this.size.radius;

        return baseArea * this.size.height;
    }

    getSizeCategory() {
        let candleVolume = this.#calcVolume();
        let category = null;

        switch (true) {
            case candleVolume < 423:
                category = "Small";
                break;
            case candleVolume >= 423 && candleVolume < 1507:
                category = "Medium";
                break;
            case candleVolume >= 1507:
                category = "Large";
                break;
            default:
                category = "Not Applicable";
                break;
        }
        return category;
    }
}

export default Candle;
