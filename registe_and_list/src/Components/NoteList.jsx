import React, { useContext } from 'react'
import { NotesContext } from '../Context/NotesContextProvider';
import Note from './Note';

export default function NoteList() {
  const{notes}=useContext(NotesContext);

  let notesOutput = notes.map(prod =>
    {
     
      return  <Note key={prod.id} id={prod.id} title={prod.title} description={prod.description} />
    }
   
  );

  return (
    <div>
      Notes <br />
      {notesOutput} <br />
    </div>
  )
}
