const express = require('express');
const Notes = require('../models/Notes')
const router = express.Router();

router.post('/', (req, res)=>{
    const user = Notes({
        title:"Title 2",
        description:"lorem ipsum lorem sipsd sdijfdn sdiihh",
        tag:"news"
    });
    user.save();
    res.send("OK");
})

module.exports = router;