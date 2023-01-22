// ############### Notes Schema File  #################

// import or require mongoose
const mongoose = require('mongoose');

// import the schema 
const {Schema} = mongoose;

// Here create schema(It is structure of data which is send to db)
const NotesSchema = new Schema({
    // user is used to connect with the user (Because every user has own notes to handle)
    user:{
        // In this section we put the user id as a foreign key
        type: mongoose.Schema.Types.ObjectId,
        // ref is refrence (it means from which schema this key is obtained)
        ref: 'user'
    },
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