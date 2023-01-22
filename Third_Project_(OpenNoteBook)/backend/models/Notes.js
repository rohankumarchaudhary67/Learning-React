// ############### Notes Schema File  #################

// import or require mongoose
const mongoose = require('mongoose');

// import the schema 
const {Schema} = mongoose;

// Here create schema(It is structure of data which is send to db)
const NotesSchema = new Schema({
    title:{
        type: String,
        required: true  // It ensure that the element is null or not
    },
    description:{
        type:String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now // It set the default value if we give this null
    }
}) 

//Here we export the schema as a name "user"
module.exports = mongoose.model('notes', NotesSchema);