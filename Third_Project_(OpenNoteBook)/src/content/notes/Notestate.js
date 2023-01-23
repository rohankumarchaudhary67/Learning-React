// import react from react
import React, { useState } from "react";

// import notecontext
import noteContext from "./noteContext";

// create a function
const NoteState = (props) => {

    // Random notes to showcase
    const notes = [
        {
            "_id": "63ce673c202ce759a3ee39d2",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        },
        {
            "_id": "63ce673e202c2e759a3ee39d4",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:50.488Z",
            "__v": 0
        },
        {
            "_id": "163ce673c202ce759a3ee39d2",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        },
        {
            "_id": "63ce673c202ce759a3ee39d12",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        },
        {
            "_id": "63ce6173c202ce759a3ee39d2",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        },
        {
            "_id": "63ce673c202ce7519a3ee39d2",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        },
    ]

    // Use state to set notes
    const [note, setNote] = useState(notes);


    //Add a Notes Function
    const addNote = (title, description, tag) => {

        const noteData = {
            "_id": "63ce673c202ce7ddfsdf519a3weee39d2",
            "user": "63ce6703202ce759wewa3ee39cd",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        }

        // Set the notes or push
        setNote(note.concat(noteData));
    }

    //Delete a Notes Function
    const deleteNote = () => {
        
    }

    //Edit a Notes Function
    const editNote = () => {
        
    }

    // Return of this function
    return (
        <noteContext.Provider value={{note, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )

}

// export note state
export default NoteState;