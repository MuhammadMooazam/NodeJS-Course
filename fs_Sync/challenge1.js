const fs = require("fs");

fs.mkdirSync("./fs_Sync/Mooazam");
fs.writeFileSync("./fs_Sync/Mooazam/data.txt" , "Syed Muhammad Mooazam");
fs.appendFileSync("./fs_Sync/Mooazam/data.txt" , "\nKING Engineer");
console.log(fs.readFileSync("./fs_Sync/Mooazam/data.txt" , "utf-8"));
fs.renameSync("./fs_Sync/Mooazam/data.txt" , "./fs_Sync/Mooazam/renamedData.txt");
fs.unlinkSync("./fs_Sync/Mooazam/renamedData.txt");
fs.rmdirSync("./fs_Sync/Mooazam");