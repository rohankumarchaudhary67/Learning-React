// ###############  Auth route file ####################
// a "routes file" typically refers to a file or module that defines the different URL paths or endpoints that the application can handle, and the corresponding functions or handlers that are executed when a request is made to those paths.

// import or require express
const express = require('express');

// import the model or schema for structure of data
const Notes = require('../models/Notes');

// import express-validator
const { body, validationResult } = require('express-validator');

//import fetchuser from middleware to fetch the users data
const fetchuser = require('../middleware/fetchuser');

// create router from express to route
const router = express.Router();










// ##################################### ROUTE 1 ########################################

// Fetch all the notes of user : GET "/api/auth/fetchallnotes" :  login required
router.get('/fetchallnotes', fetchuser, async(req, res) => {

    try {

        // Fetch notes from db with the help of user id
        const notes = await Notes.find({user: req.user.id});

        // Response of this route
        res.json(notes);
        
    } catch(error){
        // If any error occured this message is shown
        console.log(error.message);
        res.status(500).json({error:"Internal Server Error"});
    }

})




// ##################################### ROUTE 2 ########################################

// Add the notes of user : POST "/api/auth/addnote" :  login required
router.post('/addnote', fetchuser, [

    // Here we use validation
    body('title',"Title is too short | Minimum is 3").isLength({min: 3}),
    // description must be at least 5 chars long
    body('description', "Description is too short | Take minimum 5 character").isLength({min: 5})

] ,async(req, res) => {

    try {

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // destructuring the data from the body
        const {title, description, tag} = req.body;

        // Save the data of notes in a variable
        const note = new Notes({
            user: req.user.id,
            title,
            description,
            tag
        })

        // Saved the notes in db
        const savedNote = await note.save();

        // Response of this route
        res.json(savedNote);
        
    } catch(error){
        // If any error occured this message is shown
        console.log(error.message);
        res.status(500).json({error:"Internal Server Error"});
    }

})










// It export the router
module.exports = router;