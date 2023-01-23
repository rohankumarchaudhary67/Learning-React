// import react from react
import React, { useState } from "react";

// import notecontext
import noteContext from "./noteContext";

// create a function
const NoteState = (props) => {

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
            "_id": "63ce673e202ce759a3ee39d4",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:50.488Z",
            "__v": 0
        },
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
            "_id": "63ce673c202ce759a3ee39d2",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        },
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
            "_id": "63ce673c202ce759a3ee39d2",
            "user": "63ce6703202ce759a3ee39cd",
            "title": "My Title 1",
            "description": "Everything is good",
            "tag": "Own",
            "date": "2023-01-23T10:53:48.786Z",
            "__v": 0
        },
    ]

    const [note, setNote] = useState(notes)

    // Return of this function
    return (
        <noteContext.Provider value={{note, setNote}}>
            {props.children}
        </noteContext.Provider>
    )

}

// export note state
export default NoteState;