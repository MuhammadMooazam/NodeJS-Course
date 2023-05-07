const fs = require("fs");

fs.writeFileSync("./fs_Sync/read.txt" , "This is Syed Muhammad Mooazam");

fs.appendFileSync("./fs_Sync/read.txt" , "\nKING Engineer");

console.log(fs.readFileSync("./fs_Sync/read.txt").toString());

fs.renameSync("./fs_Sync/read.txt" , "./fs_Sync/readWrite.txt");