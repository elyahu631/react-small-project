import React, { useContext, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../Context/NotesContextProvider";
export default function Main() {
  const [textTitle, setTextTitle] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const { counterId, setCounterId,notes, setNotes } = useContext(NotesContext);

  const navigate = useNavigate();
  // שליחת טופס ההרשמה
  function handleSubmit(e) {
    e.preventDefault();
    let newIdCounter = counterId;
    let newNotes = [
      ...notes,
      { id: newIdCounter, title: textTitle, description: textDescription },
    ];
    setTextTitle("")
    setTextDescription("")
    setCounterId(newIdCounter + 1);
    console.log(newNotes);
    setNotes(newNotes);
  }

  return (
    <>
      <Button
        className="w-0 mt-4"
        onClick={(e) => {
          navigate("/");
        }}
      >
        Sign Out
      </Button>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-5">Main</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder="Enter Title"
                type="text"
                value={textTitle}
                onChange={(event) => setTextTitle(event.target.value)}
                id="title"
                required
              />
            </Form.Group>

            <Form.Group id="descriptoin">
              <Form.Label>Descriptoin</Form.Label>
              <Form.Control
                placeholder="Enter Descriptoin"
                type="text"
                value={textDescription}
                onChange={(event) => setTextDescription(event.target.value)}
                id="descriptoin"
                required
              />
            </Form.Group>
            <Button className="w-0 mt-4" type="submit ">
              ADD
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Button
        className="w-0 mt-4"
        onClick={(e) => {
          navigate("/notes");
        }}
      >
        Go to notes page
      </Button>
    </>
  );
}
