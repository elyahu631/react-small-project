import React, { createContext, useState } from 'react'

export const NotesContext = createContext();

export default function NotesContextProvider(props) {
  const [notes, setNotes] = useState([]);
  const [counterId, setCounterId] = useState(1);

  const deleteNote = (noteId) =>{
      let newNote = [...notes.filter(note => note.id !== noteId)];
      setNotes(newNote)
      console.log(newNote);
  }
 
  return (
    <NotesContext.Provider value={{
      notes, setNotes,deleteNote,counterId, setCounterId
    }}>
      {props.children}
    </NotesContext.Provider>
  )
}

