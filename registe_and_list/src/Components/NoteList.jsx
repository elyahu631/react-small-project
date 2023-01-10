import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { NotesContext } from '../Context/NotesContextProvider';
import Note from './Note';

export default function NoteList() {
  const{notes}=useContext(NotesContext);

  let notesOutput = notes.map(note =>
    {
     
      return  <Note key={note.id} id={note.id} title={note.title} description={note.description} />
    }
   
  );

  return (
    <div>
      <h1>Notes</h1> <br />
      <Card>
      {notesOutput} <br />
      </Card>
    </div>
  )
}
