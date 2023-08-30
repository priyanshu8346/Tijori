import React from 'react'
import { useContext , useState } from 'react';
import NoteContext from '../context/notes/NoteContext';


export default function AddNote() {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title:"",description:"",tag:"default"})
    const handleclick = (e) => {
        // to prevent page from reloading 
        e.preventDefault();
    addNote(note)
    }

    const onChange=(e)=>{
        // here this syntax means notes ko vaisa hi rehne do bs jo value e.target.name ki through passs ki ja rhi hai unhe ya to update krdo ya add krdo

        // here it is stored in {} because we are using above note as object just spreadd operator Syntax don't worry 
        setNote({...note,[e.target.name]:e.target.value} )
       
    }

    return (
        <div>
            <div className='container my-3'>
                <h2>Add a note</h2>

                {/* form bootstrap      */}
                <div className='container my-3'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title"  onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">tag</label>
                            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
