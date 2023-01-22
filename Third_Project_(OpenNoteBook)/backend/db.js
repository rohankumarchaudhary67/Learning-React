// ############### DB --> Here we connect with the database #################

// import or require mongoose
const mongoose = require('mongoose');

// mongoose.set is used to allow that only queries which include fields
mongoose.set('strictQuery', true);

// mongoURI is the connection string
const mongoURI = "mongodb://127.0.0.1:27017/";

// Function which call for connect with mongoDB
const connectToMongo = () => {

    // mongoose.connect is used to connect with mongoDB
    mongoose.connect(mongoURI, {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    });
    console.log("Connected");
}

// It can exports this function to main file
module.exports = connectToMongo;
