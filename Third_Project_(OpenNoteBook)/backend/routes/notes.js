// ###############  Auth route file ####################
// a "routes file" typically refers to a file or module that defines the different URL paths or endpoints that the application can handle, and the corresponding functions or handlers that are executed when a request is made to those paths.

// import or require express
const express = require('express');

// import the model or schema for structure of data
const Notes = require('../models/Notes');

// create router from express to route
const router = express.Router();

// It is post request to send the data into database
router.post('/', (req, res)=>{
    const user = Notes({
        title:"Title 2",
        description:"lorem ipsum lorem sipsd sdijfdn sdiihh",
        tag:"news"
    });
    user.save();
    res.send("OK");
})

// It export the router
module.exports = router;