// import react from react
import React, { useState } from "react";

// import notecontext
import noteContext from "./noteContext";

// create a function
const NoteState = (props) => {

    // create a string for local host
    const host = "http://localhost:5000";

    // Random notes to showcase
    const notesInitial = [];

    // Use state to set notes
    const [note, setNote] = useState(notesInitial);

    //Get all Notes Function
    const getAllNote = async () => {

        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        });

        const json = await response.json();
        setNote(json);
    }


    //Add a Notes Function
    const addNote = async (title, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });

        const notes = await response.json();
        setNote(note.concat(notes))
    }

    //Delete a Notes Function
    const deleteNote = async (id) => {

        // API Delete call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });

        const json = await response.json();

        const newNotes = note.filter((note) => { return note._id !== id })
        setNote(newNotes);

    }

    //Edit a Notes Function
    const editNote = async (id, title, description, tag) => {

        // API Call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(note))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNote(newNotes);
    }

    // Return of this function
    return (
        <noteContext.Provider value={{ note, getAllNote, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )

}

// export note state
export default NoteState;