import React, { useContext, useState } from 'react'
import { Card, Button, Form } from "react-bootstrap";
import { NotesContext } from '../Context/NotesContextProvider';
export default function Main() {
  const [textTitle,setTextTitle] = useState("")
  const [textDescription,setTextDescription] = useState("")
  const [counterId,setCounterId] = useState(1)
  const {notes, setNotes} = useContext(NotesContext)


  // שליחת טופס ההרשמה
  function handleSubmit(e) {
    e.preventDefault();
    let newIdCounter = counterId;
    let newNotes = [...notes,{id:newIdCounter,title:textTitle,description:textDescription}];
    setCounterId(newIdCounter + 1);
    console.log(newNotes); 
    setNotes(newNotes);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-5">TITLE</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text" 
                onChange={(event) => setTextTitle(event.target.value)} 
                id='title'              
                required
              />
            </Form.Group>

            <Form.Group id="descriptoin">
              <Form.Label>Descriptoin</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => setTextDescription(event.target.value)}
                id='descriptoin'              
                required               
              />
            </Form.Group>
            <Button className="w-0 mt-4" type="submit ">
              ADD
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
