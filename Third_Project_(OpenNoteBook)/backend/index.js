// #################### Index file (main entry point) ########################

// import the connection function from require database
const connectToMongo = require('./db');

// import or require the express
const express = require('express');

// Call the function to connect with database
connectToMongo();

// It creates an instance of the Express.js
const app = express();
const port = 5000;


// It is a middle ware to the express js
app.use(express.json());

// Available roots
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


//This code starts the server and logs a message to the console indicating that the server is running and listening for incoming requests on port 3000.
app.listen(port, () => {
    console.log(`Open Notebook backend listening at http://localhost:${port}`)
})