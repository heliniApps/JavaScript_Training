const multiTypeArray = [
    56,
    49.58,
    "text1",
    "string2",
    true,
    false,
    { name: "helini", job: "software engineer" },
    [4, 2, 8, 19, 28],
    "Last Item",
];

console.log("multiTypeArray:", multiTypeArray);

// remove the last item
let lastItem = multiTypeArray.pop();
console.log("lastItem:", lastItem);

// move the last item to first position
const multiTypeArrCopy = [...multiTypeArray]; //  Array.from(multiTypeArray);   multiTypeArray.slice(0);
let newLength = multiTypeArrCopy.unshift(multiTypeArrCopy.pop());
console.log(multiTypeArray);
console.log(multiTypeArrCopy);

const stringArray = ["pen", "mug", "tea", "milk", "sugar", "bottle", "candle"];

// sort alphabetically
stringArray.sort();
console.log("Sorted stringArray:", stringArray);

// Find the specific item
let foundItemIndex = stringArray.indexOf("tea");
console.log(
    "Has item 'tea' ? ",
    foundItemIndex > -1 ? stringArray[foundItemIndex] : null
);

let foundItem = stringArray.find((item) => item === "mug");
console.log("using find() method: ", foundItem);

// Remove an item from the array
const stringArrCopy = Array.from(stringArray);
let removedItems = stringArrCopy.splice(-2);
console.log("removed Items: ", removedItems);

let mugItemIndex = stringArrCopy.indexOf("mug");
let removedMugItem = stringArrCopy.splice(mugItemIndex, 1);
console.log("Removed Mug Item:", removedMugItem);

// Capitalize the first letter of the item and map to the existing Array.
const capitalizeFirstLetter = (item) => {
    item = item.charAt(0).toUpperCase() + item.substring(1, item.length);
    return item;
};
let mappedStrArr = stringArray.map(capitalizeFirstLetter);

console.log("mappedStrArr:", mappedStrArr);
