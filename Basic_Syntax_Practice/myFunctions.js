function isEven(num) {
    if (typeof num !== "number") {
        return false;
    }
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function isEven_v2(num) {
    if (typeof num !== "number") {
        return false;
    }
    return num % 2 === 0;
}

/**
 * Print the specified speech to standard the output, using the defined repetitions.
 * @param {string} speech Text to print.
 * @param {number} howMany How many times to print the text.
 * @returns nothing.
 */
function speakSomething(speech, howMany) {
    speech = typeof speech === "undefined" ? "Default Speech" : speech;
    howMany = typeof howMany === "undefined" ? 10 : howMany;

    if (typeof speech !== "string") {
        return;
    }
    if (typeof howMany !== "number") {
        return;
    }

    for (var i = 0; i < howMany; i++) {
        console.log(speech + "(" + i + ")");
    }
}

/**
 * Uses a 'switch' to do the validation.
 */
function speakSomething_v2(speech, howMany) {
    switch (typeof speech) {
        case "undefined":
            speech = "Default Speech";
            break;
        case "string":
            break;
        default:
            console.log("Not the speech we expect.");
            return;
    }
    switch (typeof howMany) {
        case "undefined":
            howMany = 10;
            break;
        case "number":
            break;
        default:
            console.log("Not the count we expect.");
            return;
    }

    for (var i = 0; i < howMany; i++) {
        console.log(speech + "(" + i + ")");
    }
}

/**
 * Default values of the arguments are defined in the function signature.
 */
function speakSomething_v3(speech = "Default Speech", howMany = 10) {
    if (typeof speech !== "string") {
        console.log("Error in speech");
        return;
    }
    if (typeof howMany !== "number") {
        console.log("error in count.");
        return;
    }

    for (var i = 0; i < howMany; i++) {
        console.log(speech + "(" + i + ")");
    }
}

/**
 * Accept a set of arguments from the User.
 * Then, get the sum of provided arguments, which are of type "Number".
 */
function addingMachine() {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        var number = arguments[i];
        if (typeof number === "number") {
            total += number;
        }
    }
    return total;
}

/**
 * Converts the built-in arguments object, to a normal Array with 'foreach' member function.
 *
 * @returns Total of all the numeric values that are passed in as function arguments.
 */
function addingMachine_v2() {
    var total = 0;
    var newArgsArr = Array.from(arguments);

    newArgsArr.forEach(function (argument) {
        if (typeof argument === "number") {
            total += argument;
        }
    });
    return total;
}

// Functions with Objects and Anonymous Functions.

var person = {
    name: "James",
    job: "Engineer",
    form: "human",
};

/**
 * Accepts a person object as the argument and changes it's 'form' property.
 * @param {object} person object to transform.
 * @returns person object, with it's 'form' property modified.
 */
function transformPerson(person) {
    if (typeof person !== "object" || !person.hasOwnProperty("form")) {
        console.log("Wrong type of object");
        return;
    }

    var magicNum = Math.floor(Math.random() * 5) + 1;

    switch (magicNum) {
        case 1:
            person.form = "tyrannosaurus";
            break;
        case 2:
            person.form = "grey wolf";
            break;
        case 3:
            person.form = "bengal tiger";
            break;
        case 4:
            person.form = "grizzly bear";
            break;
        case 5:
            person.form = "canary";
            break;
        default:
            // he stays human
            break;
    }
}

/**
 * A simple backpack with functions within it's properties.
 */
var backPackObj = {
    brand: "Nike",
    color: "black",
    strapSize: {
        length: 43,
        width: 7,
    },
    adjustStrapSize: function (len, wid) {
        if (typeof len === "number") {
            this.strapSize.length = len;
        }
        if (typeof wid === "number") {
            this.strapSize.width = wid;
        }
    },
    changeColor: function (newColor) {
        if (typeof newColor === "string") {
            this.color = newColor;
        }
    },
};

backPackObj.color;
backPackObj.strapSize.length;
backPackObj.strapSize.width;

backPackObj.changeColor("cyan");
backPackObj.color;

backPackObj.adjustStrapSize(50, 10);
backPackObj.adjustStrapSize.length;
backPackObj.adjustStrapSize.width;

// Call-back Functions

function doubleIt(number) {
    return number * 2;
}

var doubleIt_v2 = (number) => number * 2;

/**
 * Uses a callback function to multiply each element of an array.
 */
function multiplyingArrays() {
    var myNumbers = [1, 2, 3, 4, 5];
    var myDoubledNums = myNumbers.map(doubleIt_v2);

    myNumbers.forEach(function (number) {
        console.log("Original Number: " + number);
    });

    myDoubledNums.forEach((number) =>
        console.log("Doubled number is: " + number)
    );
}
