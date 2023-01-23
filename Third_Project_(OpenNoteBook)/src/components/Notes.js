/* eslint-disable react-hooks/rules-of-hooks */
// import react component from react
import React, { useContext } from 'react'

// import notecontext
import noteContext from '../content/notes/noteContext'
import NoteItem from './NoteItem';


// Main function of notes component
const Notes = () => {

    // use context from context api
    const context = useContext(noteContext);

    // destructuring of the context components
    const { note, addNote } = context;

    return (
        <>

            <h1 className='text-left'>Your Notes</h1>

            <div className="row mx-2 my-3 text-left">

                {/* fetch all the notes and map here  */}
                {
                    note.map((note) => {
                        return <NoteItem key={note._id} note={note} />;
                    })
                }

            </div>
        </>
    )
}

export default Notes