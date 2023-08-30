import { React,useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';



function Noteitem(props) {
    const context = useContext(NoteContext);
    const {deleteNote} = context
    return (
        <div>
           <div className='col-md-3 '>
            <div className="card my-3 text-bg-light" style={{"width": "18rem"}} >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(props.note._id)}} ></i>
                    <i className="fa-solid fa-pen-to-square" onClick={()=>{props.updateNote(props.note)}}></i>
                </div>
            </div>
        </div></div>
    )
}

export default Noteitem;