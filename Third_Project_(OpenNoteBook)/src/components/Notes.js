/* eslint-disable react-hooks/rules-of-hooks */
// import react component from react
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';

// import notecontext
import noteContext from '../content/notes/noteContext'
import NoteItem from './NoteItem';


// Main function of notes component
const Notes = () => {

    // use context from context api
    const context = useContext(noteContext);

    const { note, getAllNote, editNote } = context;

    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            getAllNote();
        }else{
            navigate("/login");
        }
        getAllNote();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);

    const [notes, setNotes] = useState({ id: "", title: "", description: "", tag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNotes(currentNote);
    }

    // This function run when there is some change on the fields
    const onChange = (e) => {
        setNotes({ ...notes, [e.target.name]: e.target.value })
    }

    const handleUpdate = () => {
        refClose.current.click();
        editNote(notes._id, notes.title, notes.description, notes.tag);
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='text-left'>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" value={notes.title} className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" value={notes.description} className="form-control" id="description" name='description' onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tag">Tag</label>
                                    <input type="text" value={notes.tag} className="form-control" id="tag" name='tag' onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button disabled={notes.title.length<5 || notes.description.length<5} type="button" className="btn btn-primary" onClick={handleUpdate}>Update Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-left'>Your Notes</h1>

            <div className="row mx-2 my-3 text-left">

                {/* fetch all the notes and map here  */}
                {
                    note.length === 0 && "Nothing Here..."
                }
                {
                    note.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
                    })
                }

            </div>
        </>
    )
}

export default Notes