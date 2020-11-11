// Declaring config variables
let usePort = 3000;
let useHTML = false;

// Declaring operation variables

// Requiring the required modules
let express = require('express');

// Requiring local modules
let work = require('./work.js');

// Creating instances of the required modules
let app = new express();



// Listening on usePort
app.listen(usePort, (err)=> {
    if(err){
        console.log(`[!] ${err}`);
    } else {
        console.log(`[~] Listening on port ${usePort}`);

        // Serve the client the html pages
        if (useHTML) app.use(express.static('public'));

        if(!useHTML) {
            work.start();
        }
    }
});