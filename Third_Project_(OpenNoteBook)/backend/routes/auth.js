// ###############  Auth route file ####################
// a "routes file" typically refers to a file or module that defines the different URL paths or endpoints that the application can handle, and the corresponding functions or handlers that are executed when a request is made to those paths.

// import or require express
const express = require('express');

// import the model or schema for structure of data
const User = require('../models/User');

// import express-validator
const { body, validationResult } = require('express-validator');

// import bcrypt js
const bcrypt = require('bcryptjs');

// import json web token
const jwt = require('jsonwebtoken');

//import fetchuser from middleware to fetch the users data
const fetchuser = require('../middleware/fetchuser');

// create router from express to route
const router = express.Router();

// Create a string json web token
const JWT_Secret = "Open$Note$Book$Secuity$String";





// ##################################### ROUTE 1 ########################################

// Create a user using : POST "/api/auth/createuser" : No login required 
router.post('/createuser', [

    // Here we use validation
    body('name',"Name is too short | Minimum is 3").isLength({min: 3}),
    // email must be an email
    body('email', "Enter the valid email (with @)").isEmail(),
    // password must be at least 5 chars long
    body('password', "Password is too short | Take minimum 5 character").isLength({min: 5})



] , async(req, res)=>{


    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }



    // Check whether the user is already exists
    try{
        // It can find that user is alreay exists or not
        let user = await User.findOne({email: req.body.email});
        if(user){
            // if user found then send this
            return res.status(400).json({email:"This email aready exists"})
        }
        // Create a salt to add extra security for password
        const salt = await bcrypt.genSalt(10);

        // Here we use hash (it is a one way function it can change the password to hash and then store)
        let securePassword = await bcrypt.hash(req.body.password, salt);

        // it create one index of that data in db
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword,
        });

        //1. send the data
        const payLoad = {
            user:{
                id:user.id
            }
        }
        //2. create token
        const auth_Token = jwt.sign(payLoad, JWT_Secret);
        //3. Send the token
        res.json({auth_Token});

    }catch(error){
        // If any error occured this message is shown
        console.log(error.message);
        res.status(500).json({error:"Internal Server Error"});
    }


})



// ##################################### ROUTE 2 #########################################

// Authenticate a user using : POST "/api/auth/login" : No login required 
router.post('/login', [

    // Here we use validation
    // check email with .isEmail()
    body('email', "Enter the valid email (with @)").isEmail(),
    // password must be at least 5 chars long
    body('password', "Password cannot be black").exists()

], async(req, res)=>{

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Take the email and password from body
    const {email, password} = req.body;

    try{

        // Find the email is exists or not
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please try with correct credentials"});
        }

        // Compare password here
        const comparePassword = await bcrypt.compare(password, user.password);
        // If password does not match with user
        if(!comparePassword){
            return res.status(400).json({error:"Please try with correct credentials"});
        }

        // If password match with the user - 

        //1. send the data
        const payLoad = {
            user:{
                id:user.id
            }
        }
        //2. create token
        const auth_Token = jwt.sign(payLoad, JWT_Secret);
        //3. Send the token
        res.json({auth_Token});


    }catch(error){
        // If any error occured this message is shown
        console.log(error.message);
        res.status(500).json({error:"Internal Server Error"});
    }

})




// ##################################### ROUTE 3 ########################################

// Get logedin user details : POST "/api/auth/getuser" : Login Required

router.post('/getuser', fetchuser, async(req, res)=>{
    
    try {

        // It take the user id from fetchuser middleware
        const userId = req.user.id;

        // It find the user from db with the help of user id
        const user = await User.findById(userId).select("-password");

        // send the response
        res.send(user);

    
    } catch(error){
        // If any error occured this message is shown
        console.log(error.message);
        res.status(500).json({error:"Internal Server Error"});
    }

})


// It export the router
module.exports = router;