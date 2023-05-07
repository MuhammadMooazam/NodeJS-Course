const fs = require("fs");

fs.writeFile("./fs_Async/read.txt", "This is Syed Muhammad Mooazam", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Write Completed");
    }
});

fs.appendFile("./fs_Async/read.txt", "\nKING Engineer", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Append Completed");
    }
});

fs.readFile("./fs_Async/read.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("ReadFile Completed");
        console.log(data);
    }
});

fs.rename("./fs_Async/read.txt", "./fs_Async/readWrite.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Rename Completed");
    }
});