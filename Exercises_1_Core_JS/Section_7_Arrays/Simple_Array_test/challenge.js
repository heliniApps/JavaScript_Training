const challengeMixedArray = [
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

const mixArrayCopy = challengeMixedArray;

// Move the last item to the first position.
mixArrayCopy.unshift(mixArrayCopy.pop());
console.log("Move the last item to the first position:", mixArrayCopy);

// Sort items alphabetically.
const stringArray = ["pet", "animal", "tree", "chair", "flower"];
let sortedArray = stringArray.sort();
console.log("sortedArray:", sortedArray);

const intArray = [4, 7, 93, 2, 78, 102];
let sortedInts = intArray.sort((a, b) => b - a);
console.log("sortedInts:", sortedInts);

// Find a specific item.
let key = true;
let foundItem = mixArrayCopy.find((item) => item === key);
console.log("foundItem:", foundItem);

// Remove a specific item from the array.
const secondStringArray = ["pet", "animal", "tree", "chair", "flower"];
let specificItem = "chair";

console.log(
    "specific item index:",
    secondStringArray.findIndex((item) => item === specificItem)
);

//option 1
secondStringArray.splice(
    secondStringArray.findIndex((item) => item === specificItem),
    1
);
console.log("secondStringArray:", secondStringArray);

//option 2
specificItem = "pet";
secondStringArray.splice(secondStringArray.indexOf(specificItem), 1);
console.log(secondStringArray);
