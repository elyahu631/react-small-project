import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NoteList from "../Components/NoteList";
export default function Notes() {
  

  const navigate = useNavigate();

  return (
    <>
    
      <NoteList />
    
      <Button
        className="w-1 mt-5"
        onClick={(e) => {
          navigate("/home");
        }}
      >
        Go to main page
      </Button>
    </>
  );
}
