import React, { useContext } from 'react'
import NoteList from '../Components/NoteList';
import { NotesContext } from '../Context/NotesContextProvider';
export default function Notes() {
  const {noteList} = useContext(NotesContext)
  return (
    <div>
      <NoteList/>
    </div>
  )
}
