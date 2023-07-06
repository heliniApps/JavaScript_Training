const mixedArray = [
    "A String value",
    5,
    78.09,
    true,
    {
        name: "hales",
        position: "software engineer",
    },
    [4, 6, 2, 8],
];

console.log("typeof Array:", typeof mixedArray);

console.log("mixedArray:", mixedArray);
console.log("mixedArray.length:", mixedArray.length);

console.log("mixedArray[4]:", mixedArray[4]);
console.log("mixedArray[5][2]:", mixedArray[5][2]);

// concat()
let concatArray = mixedArray.concat([4, "second array item", false]);
console.log("concat Array:", concatArray);

// forEach()
mixedArray.forEach(function (item) {
    console.log(`<li>${item}</li>`);
});

// find()
let foundObj = mixedArray.find((item) => {
    if (typeof item === "boolean") {
        return item;
    }
});
console.log("foundObj:", foundObj);

// push()
mixedArray.push("pushed item - at the end");
console.log("push:", mixedArray);

// pop()
let popItem = mixedArray.pop();
console.log("popItem:", popItem);
console.log("mixedArray:", mixedArray);

// shift()
let shiftItem = mixedArray.shift();
console.log("shiftItem:", shiftItem);
console.log("mixedArray:", mixedArray);

// unshift()
let newArrLength = mixedArray.unshift("Unshifted item", false, 32);
console.log("mixedArray::", mixedArray);
