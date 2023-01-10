import React, { createContext, useState } from 'react'

export const NotesContext = createContext();

export default function NotesContextProvider(props) {
  const [notes, setNotes] = useState([]);
  const deleteNote = (noteId) =>{
      let newNote = [...notes.filter(prod => prod.id !== noteId)];
      setNotes(newNote)
  }
 
  return (
    <NotesContext.Provider value={{
      notes, setNotes,deleteNote
    }}>
      {props.children}
    </NotesContext.Provider>
  )
}

