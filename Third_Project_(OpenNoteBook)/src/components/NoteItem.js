import React, {useContext} from 'react'

// import notecontext
import noteContext from '../content/notes/noteContext';

const NoteItem = (props) => {
    
    // use context from context api
    const context = useContext(noteContext);

    // destructuring of the context components
    const { deleteNote } = context;

    const { note, updateNote } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-1">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="my-1 mr-3">{note.title}</h5>
                        <i className="fa-regular fa-pen-to-square mx-1" onClick={()=>{updateNote(note)}}></i>
                        <i className="fa-solid fa-trash-can mx-1" onClick={()=>{deleteNote(note._id)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p className='m-0'>Tag: {note.tag}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem