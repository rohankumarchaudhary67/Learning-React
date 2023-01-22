const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/";

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    })
    console.log("Connected")
}

module.exports = connectToMongo;
