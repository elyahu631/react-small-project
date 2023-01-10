import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NotesContext } from '../Context/NotesContextProvider'

export default function Note(props) {
  const { deleteNote } = useContext(NotesContext)

  return (
    <Container>

      <Row>
        <Col xs lg="3" style={{fontWeight: "800"}}>{props.title} </Col>
        <Col  xs lg="7" style={{fontWeight: "500"}}>{props.description}</Col>
        <Col xs lg="2" className="d-flex align-items-center justify-content-center">
          <Button  style={{fontSize: "12px"}} onClick={() => deleteNote(props.id)}>❌</Button>
        </Col>
      </Row>
      <hr />
    </Container>
  )
}
