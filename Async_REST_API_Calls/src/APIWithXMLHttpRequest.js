/* Making an API call with JavaScript XMLHttpRequest object. */
const apiEndPoint = "http://api.open-notify.org/astros.json";

const getSpacePeopleData = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open("GET", url); // Sets the HTTP method and URL/endpoint.

        request.onload = () => {
            if (request.status === 200) {
                // resolve(JSON.stringify(request.response)); // Unnecessary to stringify. Response is already in JSON format.
                // resolve(JSON.parse(request.response));
                resolve(request.response);
            } else {
                reject(request.statusText);
            }
        };

        // err: ProgressEvent<EventTarget>
        request.onerror = () => {
            reject(`Error occurred. Status code is ${request.status}.`);
        };

        request.send(); // Initiates the request.
    });
};

/* Retrieving data */

getSpacePeopleData(apiEndPoint)
    .then((responseData) => {
        console.log(JSON.parse(responseData));
        // console.log(`Response Data:\n ${responseData} \n`);  // ans: Prints JSON format data.
    })
    .catch((errorStatus) => console.error(new Error(errorStatus)));
