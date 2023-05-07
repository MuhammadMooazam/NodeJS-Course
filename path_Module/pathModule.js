const path = require("path");

console.log(path.dirname('/home/mooazam/Desktop/Mooazam/Software Development/3) NodeJS Course Thapa Technical/path_Module/pathModule.js'));
console.log(path.extname('/home/mooazam/Desktop/Mooazam/Software Development/3) NodeJS Course Thapa Technical/path_Module/pathModule.js'));
console.log(path.basename('/home/mooazam/Desktop/Mooazam/Software Development/3) NodeJS Course Thapa Technical/path_Module/pathModule.js'));

const myPath = path.parse('/home/mooazam/Desktop/Mooazam/Software Development/3) NodeJS Course Thapa Technical/path_Module/pathModule.js');
console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.path_Module);
console.log(myPath.base);
console.log(myPath.ext);
console.log(myPath.name);
