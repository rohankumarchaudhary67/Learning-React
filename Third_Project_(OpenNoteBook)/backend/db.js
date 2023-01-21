// In this file we connect with the database of mongoDB
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to MongoDB successfully")
    })
}

module.exports = connectToMongo;