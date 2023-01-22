// ############### User Schema File  #################

// import or require mongoose
const mongoose = require('mongoose');

// import the schema 
const {Schema} = mongoose;

// Here create schema(It is structure of data which is send to db)
const UserSchema = new Schema({
    name:{
        type: String,
        required: true   // It ensure that the element is null or not
    },
    email:{
        type:String,
        required: true,
        unique: true      // It can check that all the value is unique
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
}) 

// mongoose.model is use to create model of that schema
const User = mongoose.model('user', UserSchema);

// it used to create indexs in db
// User.createIndexes();

//Here we export the schema as a name "user"
module.exports = User;