const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', (req, res)=>{
    const user = User({
        name:"Rohan Kumar",
        email:"rohan12@gmail.com",
        password:"23"
    });
    user.save();
    res.send("OK");
})

module.exports = router;