/**
 * This class describes the properties of a Mug.
 * Provides functions:
 *      To re-print the Mug to change the color and design.
 *      To change the contents filled inside the Mug.
 */
class Mug {
    constructor(
        mugId,
        bodyShape,
        handleShape,
        material,
        volume,
        outsideColor,
        insideColor,
        isPrinted,
        printDescription,
        hasContent,
        contentType,
        contentDescription,
        isContentHot
    ) {
        this.mugId = mugId;
        this.bodyShape = bodyShape;
        this.handleShape = handleShape;
        this.material = material;
        this.volume = volume;
        this.design = {
            color: {
                outside: outsideColor,
                inside: insideColor,
            },
            isPrinted: isPrinted,
            printDescription: printDescription,
        };
        this.contents = {
            hasContent: hasContent,
            type: contentType,
            description: contentDescription,
            isHot: isContentHot,
        };
    }

    rePrint(printStatus, printDesc) {
        if (typeof printStatus !== "boolean") {
            console.log("Print Status has incorrect argument type.");
            return;
        }
        this.design.isPrinted = printStatus;
        this.design.printDescription = printStatus === true ? printDesc : null;
    }

    changeContents(contentType, contentDesc, isContentHot) {
        if (arguments.length !== 3) {
            console.log("Mandatory argument values are not provided.");
            return;
        } else if (contentType !== null && typeof contentType !== "string") {
            console.log("Incorrect Content Type.");
            return;
        } else if (contentDesc !== null && typeof contentDesc !== "string") {
            console.log("Incorrect Content Description.");
            return;
        } else if (typeof isContentHot !== "boolean") {
            console.log("Incorrect content temperature status.");
            return;
        }

        this.contents.hasContent = contentType !== null ? true : false;
        this.contents.type = contentType;
        this.contents.description = contentDesc;
        this.contents.isHot = isContentHot;
    }
}

export default Mug;
