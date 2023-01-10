import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NotesContext } from '../Context/NotesContextProvider'

export default function Note(props) {
  const { deleteNote } = useContext(NotesContext)

  return (
    <Container>
      <Row>
        <Col xs lg="1">{props.title} </Col>
        <Col md="auto">{props.description}</Col>
        <Col>
          <Button md="auto" onClick={() => deleteNote(props.id)}>❌</Button>
        </Col>
      </Row>
    </Container>
  )
}
