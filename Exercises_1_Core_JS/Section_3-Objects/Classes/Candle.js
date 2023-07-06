export default class Candle {
    constructor(
        modelId,
        scent,
        color,
        sizeType,
        dimensions_height,
        dimensions_radius,
        dimensions_unit_meas,
        style_shape,
        style_surface,
        manufacturedDate
    ) {
        this.modelId = modelId;
        this.scent = scent;
        this.color = color;
        this.manufacturedDate = manufacturedDate;
        this.sizeType = sizeType;
        this.dimensions = {
            height: dimensions_height,
            radius: dimensions_radius,
            unit_meas: dimensions_unit_meas,
        };
        this.style = {
            shape: style_shape,
            surface: style_surface,
        };
    }

    isScented() {
        if (this.scent !== null && this.scent !== "") {
            return true;
        }
        return false;
    }

    #setSizeType(currentHeight) {
        if (currentHeight === null || typeof currentHeight !== "number") {
            return;
        }
        if (currentHeight <= 10) {
            this.sizeType = "small";
        } else if (currentHeight > 10 && currentHeight <= 20) {
            this.sizeType = "medium";
        } else if (currentHeight > 20) {
            this.sizeType = "large";
        }
    }

    changeScent(scent) {
        this.scent = scent;
    }

    changeDimensions(height, radius) {
        if (typeof height !== "number" || typeof radius !== "number") {
            return;
        }
        this.dimensions.height = height;
        this.dimensions.radius = radius;

        this.#setSizeType(this.dimensions.height);
    }

    isScentStillEffective() {
        let mfdate = Date.parse(this.manufacturedDate);
        let currentDate = new Date();
        let elapsedTimeInMs = currentDate - mfdate;
        let yearsPassed = Math.floor(
            elapsedTimeInMs / (1000 * 3600 * 24 * 365)
        );

        return yearsPassed < 4;
    }
}
