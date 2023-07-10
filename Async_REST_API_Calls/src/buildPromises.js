/* Returns a Promise that performs an action after a timeout. */
function delay(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000, seconds);
    });
}

console.log("Starting Program..");

delay(2).then((delayTime) => console.log(`Delaying ${delayTime} sec(s).`));

/* Promise that handles both resolution and error scenarios. */

const delayAction = (seconds) =>
    new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject(seconds);
        }

        setTimeout(resolve, seconds * 1000, seconds);
    });

console.log("Starting Promise with Reject...");

delayAction(5)
    .then((delayTime) => console.log(`${delayTime} sec(s) delayed.`))
    .catch((delayTime) =>
        console.log(`The function argument (${delayTime}) is not a number.`)
    );

delayAction(false).then(
    (delayTime) => console.log(`${delayTime} sec(s) delayed.`),
    (delayTime) => console.log(`Function arg (${delayTime}) is not a number.`)
);

// handle error with catch().
delayAction("4")
    .then((delayTime) => console.log(`${delayTime} sec(s) delayed.`))
    .catch((delayTime) => {
        console.log(`The function argument (${delayTime}) is not a number.`);
        throw new Error("Incorrect argument type");
    });

// When there are two different callback functions added for 'reject' scenario,
// only the first callback assigned to the Promise will be executed.
// In this case, 'reject callback' on 'then' func.
delayAction("8")
    .then(
        (delayTime) => console.log(`Delay time is ${delayTime} sec(s).`),
        (delayTime) =>
            console.log(`Error found. "${delayTime}" is not a number.`)
    )
    .catch((delayTime) => {
        throw new Error("Incorrect argument value.");
    });

/* Promise without passing-in a 'reject' callback. */

const delayWithoutReject = (seconds) =>
    new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject("No callback defined. Just a error message."); // Throws an Error, with only the given message. No additional details.
            // reject(new Error("Incorrect arg type.")); // throws an Error, without a explicit reject callback.
            // reject(seconds, new Error("incorrect arg.")); // throws Error, but incorrect format. Ans: {undefined. Promise.catch (async) (anonymous)}
        }

        setTimeout(resolve, seconds * 1000, seconds);
    });

console.log("Starting - without reject callback...");

delayWithoutReject("5").then((delayTime) =>
    console.log(`${delayTime} sec(s) delayed.`)
);

// delayAction("4")
//     .then((delayTime) => console.log(`${delayTime} sec(s) delayed.`))
//     .catch((delayTime, errorObj) => {
//         console.log(`The function argument (${delayTime}) is not a number.`);
//         throw errorObj;
//     });
