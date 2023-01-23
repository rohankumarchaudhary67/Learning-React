/* eslint-disable no-undef */
import React, {useContext, useState} from 'react'

// import notecontext
import noteContext from '../content/notes/noteContext'

const AddNote = () => {

    // use context from context api
    const context = useContext(noteContext);

    // destructuring of the context components
    const {addNote } = context;

    const [note, setNote] = useState({title:"", description:"", tag:""})

    // Handle Click 
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]:e.target.value})
    }

    return (
        <div className="container my-3">

            <h1 className='text-left'>Add a Note</h1>

            <form className='text-left'>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-dark" onClick={handleClick}>Submit</button>
            </form>

        </div>
    )
}

export default AddNote