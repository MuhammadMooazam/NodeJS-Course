const fs = require("fs");

const bioData = {
    name: "Mooazam",
    university: "NED UET",
    age: 22
};

const jsonData = JSON.stringify(bioData);

fs.writeFile("jsonData.json", jsonData, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Done");
    }
});

fs.readFile("jsonData.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const objData = JSON.parse(data);
        console.log(objData);
    }
});