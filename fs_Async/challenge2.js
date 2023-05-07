const fs = require("fs");

fs.mkdir("./fs_Async/Mooazam", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Folder Creation Completed");
    }
});

fs.writeFile("./fs_Async/Mooazam/data.txt", "Syed Muhammad Mooazam", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Write Completed");
    }
});

fs.appendFile("./fs_Async/Mooazam/data.txt", "\nKING Engineer", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Append Completed");
    }
});

fs.readFile("./fs_Async/Mooazam/data.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("ReadFile Completed");
        console.log(data);
    }
});

fs.rename("./fs_Async/Mooazam/data.txt", "./fs_Async/Mooazam/renamedData.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Rename File Completed");
    }
});

fs.unlink("./fs_Async/Mooazam/renamedData.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Delete File Completed");
    }
});

fs.rmdir("./fs_Async/Mooazam", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Delete Folder Completed");
    }
});