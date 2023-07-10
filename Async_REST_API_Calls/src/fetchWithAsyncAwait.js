/* async/await function. */

const delay = (seconds) =>
    new Promise((resolve, reject) => {
        setTimeout(resolve, seconds * 1000);
    });

const countToFive = async () => {
    console.log("Start counting...");
    await delay(1);
    console.log("waited 1 sec");
    await delay(2);
    console.log("waited 2 secs");
    await delay(3);
    console.log("waited 3 secs");
};
// countToFive();

/* "fetch()" data with async & await. */

const fetchData = (url) => fetch(url);

const astrosApiEndpoint = "http://api.open-notify.org/astros.json";

const getSpacePeople = async () => {
    let response = await fetchData(astrosApiEndpoint);
    let spaceDataObj = await response.json();
    return spaceDataObj.people;
};

getSpacePeople().then(console.log);

// github api request
const githubApiEndpoint = "https://api.github.com/users/";

const githubUserInfo = async (username) => {
    let response = await fetchData(`${githubApiEndpoint}${username}`);
    let jsonDataObj = await response.json();
    let summary = {
        name: jsonDataObj.name,
        company: jsonDataObj.company,
    };
    return summary;
};

githubUserInfo("username").then(console.log);
