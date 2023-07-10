const apiEndPoint = "http://api.open-notify.org/astros.json";

/* Retrieving data using 'fetch()' function. */

const fetchData = (url) => fetch(url);
const spacePeopleResponse = () => fetchData(apiEndPoint);

spacePeopleResponse().then(console.log); // Full Response object.

spacePeopleResponse().then(
    (response) => {
        console.log("response.text().\n", response.text());
        // console.log("response.blob(): \n", response.blob());
        // console.log("response.formData(): \n", response.formData());
        // console.log("response.clone().\n", response.clone()); // Makes a clone of the Response object.
    },
    (reason) => console.log(reason)
);

/* Extract only the JSON data from the Response object. */

const getSpacePeople = () =>
    spacePeopleResponse().then((response) => response.json());

getSpacePeople().then(console.log); // simple data object with "properties: values".

/* Manipulate the data object. */

const peopleNames = () =>
    getSpacePeople()
        .then((dataObj) => dataObj.people)
        .then((peopleObjArr) => peopleObjArr.map((person) => person.name))
        .then((namesArr) => namesArr.join(", "));

peopleNames().then(console.log);

const peopleOnISS = () =>
    getSpacePeople()
        .then((dataObj) => dataObj.people)
        .then((peopleObjArr) =>
            peopleObjArr.filter((person) => person.craft === "ISS")
        )
        .then((issPeopleArr) => issPeopleArr.map((person) => person.name))
        .then((peopleNames) => peopleNames.join(" | "));

peopleOnISS().then(console.log);
