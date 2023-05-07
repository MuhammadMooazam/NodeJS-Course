//Module Wrapper functon here is also knows as IIFE (Immediately Invoked Function Expression)

(function (exports, requie, module, __filename, __dirname) {
    const fs = require('fs');

    const name = 'Mooazam';
    console.log(name);

    module.exports = { name };
});



