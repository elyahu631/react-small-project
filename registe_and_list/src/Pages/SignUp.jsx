import React from 'react'
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localUsersContext } from "../Context/LocalUsersContextProvider";
import { Card, Button, Form, Alert } from "react-bootstrap";

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]{3,7}$/;
const passwordRegex = /^[a-zA-Z0-9.!@#$%^&*?><]{8,20}$/;

export default function SignUp() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  // const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  // const [passwordValid, setPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  // const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const [error, setError] = useState("");

  const { usersLocal, addUserToContext } = useContext(localUsersContext);

  // שליחת טופס ההרשמה
  async function handleSubmit(e) {
    e.preventDefault();

    let newUser = {
      email: email,
      password: password,
    };

    if (!emailRegex.test(email)) {
      console.log("Invalid email");
      setError("כתובת אימייל שגויה");
      return;
    }

    let userEmailExists = usersLocal.find((user) => user.email === email);
    if (userEmailExists) {
      setError("Invalid user");
      return;
    }

    if (!passwordRegex.test(password)) {
      console.log("Invalid password");
      setError("סיסמה שגויה");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Invalid comfirmPassword");
      setError("אימות סיסמה שגוי");
      return;
    }

   

    addUserToContext(newUser);
    navigate("/");
  }
  

  return (
    <>
            

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">הרשמה</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>אימייל</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group id="email"></Form.Group>

            <Form.Group id="password">
              <Form.Label>סיסמה</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>אימות סיסמה</Form.Label>
              <Form.Control
                type="password"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </Form.Group>
            <Button className="w-100 mt-2" type="submit">
              הירשם
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mb-4 mt-2">
        יש לך כבר חשבון -&gt; התחבר
      </div>
    </>
  );
};

