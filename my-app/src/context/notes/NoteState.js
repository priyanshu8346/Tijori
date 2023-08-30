import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const notesInitial = []
  const [Notes, setNotes] = useState(notesInitial);

  // fetchNotes
  const getNotes = async () => {

    const response = await fetch(`${host}/notes/fetchAllNotes`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json)
    setNotes(json);
  }





  // Add a note 
  const addNote = async ({ title, description, tag }) => {

    const response = await fetch(`${host}/notes/addNote`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    // parses JSON response into native JavaScript objects


    const json = await response.json();

    setNotes((prev) => [...prev, json])


  }

  // delete a note needs id
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: 'DELETE',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json();

    const newNotes = Notes.filter((json) => {
      return (json._id !== id)
    })
    setNotes(newNotes);
  }

  // edit a note needs id
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    let newNotes = JSON.parse(JSON.stringify(Notes));
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  const resetNotes = () => {
    setNotes([])
  }

  return (
    <NoteContext.Provider value={{ Notes, addNote, deleteNote, editNote, setNotes, getNotes, resetNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;