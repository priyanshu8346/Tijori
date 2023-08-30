import React, { useEffect, useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem'

function Notes() {
    const context = useContext(NoteContext);
    const { Notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })
    let navigate = useNavigate();
    const ref = useRef(null);
    const closeRef = useRef(null);

    useEffect(() => {
        if(localStorage.getItem('token'))
        getNotes();
        else
        navigate("/login");
        // eslint-disable-next-line
    }, [])
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    }

    const handleclick = (e) => {
        // to prevent page from reloading 
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag)
        closeRef.current.click();
    }

    const onChange = (e) => {
        // here this syntax means notes ko vaisa hi rehne do bs jo value e.target.name ki through passs ki ja rhi hai unhe ya to update krdo ya add krdo
        // here it is stored in {} because we are using above note as object just spreadd operator Syntax don't worry 
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className='container my-3'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="etitle" className="form-label">Title</label>
                            <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="edescription" className="form-label">Description</label>
                            <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="etag" className="form-label">tag</label>
                            <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                        </div>
                    </form>
                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref = {closeRef} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{margin:'auto', maxWidth:'90vw'}}>
            <h1>Your Notes</h1>
            {(Notes.length)?<div className='row row-cols-1 row-cols-md-3 g-4'>
                {Notes.map((note) => { return <Noteitem key={note._id} updateNote={updateNote} title={note.title} description={note.description} note={note} /> })}
            </div>:
            <div >
                <h2>No notes to display. Please add some Notes</h2>
            </div>
            }
            </div>
        </>
    )
}

export default Notes