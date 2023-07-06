console.log("I'm rendered.. :)");

function createBoxes() {
    const boxDiv = document.querySelector("#box");

    for (let i = 1; i <= 7; i++) {
        const countDiv = document.createElement("div");
        countDiv.addEventListener(
            "click",
            () => {
                alert(`This is box #${i}`);
            },
            false
        );
        boxDiv.appendChild(countDiv);
    }
}
createBoxes();

const courseObj = {
    name: "Learning JavaScript",
    topics: ["Strings", "Arrays", "Sets", "Maps"],
};

const testSymbolType = () => {
    let id = Symbol();

    console.log(courseObj);

    courseObj[id] = 345;
    console.log("with Symbol:", courseObj);

    courseObj["id"] = "JS-C45";
    console.log("with string ID:", courseObj);
};
testSymbolType();

////////////////////////////////

/*  Inheritance */

class Vehicle {
    constructor(model, wheels) {
        this.model = model;
        this.wheels = wheels;
    }

    describeYourSelf() {
        console.log(
            `\nI am a ${this.model}, and I have ${this.wheels} wheels.`
        );
    }
}

const combiVan = new Vehicle("Combi Van", 6);
combiVan.describeYourSelf();

class Car extends Vehicle {
    constructor(model, wheels, color) {
        super(model, wheels);
        this.color = color;
    }

    set setColor(newColor) {
        this.color = newColor;
    }
}

const toyotaCar = new Car("Toyota", 4, "white");

toyotaCar.describeYourSelf();
console.log(`Color is:  ${toyotaCar.color}`);

toyotaCar.setColor = "blue";
console.log(`Color is:  ${toyotaCar.color}`);

////////////////////////////////

/* getters &  setters */

const names = {
    _list: [],

    set addName(name) {
        this._list.push(name);
    },

    get namesList() {
        return this._list.join(", ");
    },
};

console.log("\nInitial List: ", names.namesList);

names.addName = "Bill";
names.addName = "Charles";

console.log("Name List: ", names.namesList);

class Hike {
    #distance;
    #pace;

    constructor(distance, pace) {
        this.#distance = distance;
        this.#pace = pace;
    }

    set newPace(pace) {
        this.#pace = pace;
    }

    get pace() {
        return this.#pace;
    }

    get lengthInHours() {
        return this.#calcLength();
    }

    #calcLength() {
        return this.#distance / this.#pace;
    }
}

const mtBullerHike = new Hike(30, 2);
console.log("\nmtBullerHike.pace:", mtBullerHike.pace);

mtBullerHike.newPace = 3;
console.log("new mtBullerHike.pace:", mtBullerHike.pace);

console.log("length in hours:", mtBullerHike.lengthInHours);

////////////////////////////////

/* default function params */

function nums(a = 1, b = 5, c = 10) {
    console.log(`a=${a}  b=${b}  c=${c}`);
}

nums(11, 12, 13);
nums(11, undefined, 13);

////////////////////////////////

/* Promises */

const delay = (seconds) => {
    return new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject("Error thrown");
        }
        setTimeout(resolve, seconds * 1000);
    });
};

delay(2).then(() => console.log("2 secs passed"));
delay("two").then(
    () => console.log("2 secs passed"),
    (msg) => console.log(msg)
);
