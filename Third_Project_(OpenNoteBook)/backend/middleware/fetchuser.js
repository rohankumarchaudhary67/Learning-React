// import json web token
const jwt = require('jsonwebtoken');

// Create a string json web token
const JWT_Secret = "Open$Note$Book$Secuity$String";

// It is a function which fetch the user from the token
const fetchuser = (req, res, next) => {

    // Get the user from the jwt token and add id to request object
    const token = req.header('auth-token');

    // check token is present or not
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }

    try {

        // If token is present

        // It fetch the data from token
        const data = jwt.verify(token, JWT_Secret);
        // And send to req.user
        req.user = data.user;

        // It is used for to call the next function when we use middleware in any route
        next();

    } catch (error) {
        // If any error occured this message is shown
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
}

// export the function fetchuser
module.exports = fetchuser;