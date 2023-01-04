/**
 * Practice 1: Build a new Object and methods.
 * Simulating a Mug.
 *
 */

const mugObj = {
    bodyShape: "uniform cylinder",
    handleShape: "half-moon",
    meterial: "ceramic",
    volume: 250.5,
    design: {
        color: {
            outside: "white",
            inside: "white",
        },
        isPrinted: false,
        printDescription: null,
    },
    content: {
        hasContent: true,
        type: "drink",
        description: "tea",
        isHot: true,
    },
    changePrint: function (printStatus, description) {
        this.design.isPrinted = printStatus;
        if (printStatus === true) {
            this.design.printDescription = description;
        } else {
            this.design.printDescription = null;
        }
    },
    refillContent: function (contentType, desc, isHot) {
        if (typeof contentType === "undefined" || contentType === null) {
            this.content.hasContent = false;
            this.content.type = null;
            this.content.description = null;
            this.content.isHot = false;
        } else if (typeof contentType === "string") {
            this.content.hasContent = true;
            this.content.type = contentType;
            this.content.description = desc;
            this.content.isHot = isHot;
            /* this.content = {
                hasContent: true,
                type: contentType,
                description: desc,
                isHot: isHot,
            }; */
        }
    },
};

console.log("\nMy Mug:", mugObj);
console.log("Outside color:", mugObj.design.color.outside);
console.log("Has a design printed? " + mugObj.design.isPrinted);

mugObj.changePrint(true, "It's going to be alright!");
console.log("Has a design printed? " + mugObj.design.isPrinted);
console.log("Print Description:", mugObj.design.printDescription);

console.log("Content:", mugObj.content);

mugObj.refillContent("food", "ice-cream", false);
console.log("After refill:", mugObj.content, `\n${mugObj.content.type}`);

mugObj.refillContent(null, "drink", true);
console.log("With Null content:", mugObj.content, `\n${mugObj.content.type}`);
