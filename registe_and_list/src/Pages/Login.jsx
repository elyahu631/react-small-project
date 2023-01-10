import React from 'react'

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localUsersContext } from "../Context/LocalUsersContextProvider";
import { Card, Button, Form, Alert } from "react-bootstrap";

const Login = () => {
  const {   userLoggedin, setUserLoggedin, SetLogUserIn} = useContext(LoginContext);
  const navigate = useNavigate();

  const { usersLocal } = useContext(localUsersContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // שליחת טופס התחברות
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    let loginAccount = usersLocal.find(
      (user) => user.email === email && user.password === password
    );


    console.log(loginAccount);
    if (!loginAccount) {
      console.log("no user matched");
      setError("פרטי התחברות לא תקינים");
      return;
    }

    SetLogUserIn(loginAccount)
    console.log("logged in",loginAccount);
    navigate("/home");
    
  };

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">התחברות</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLoginSubmit}>
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
          <Button className="w-100 mt-2" type="submit">
            התחבר
          </Button>
        </Form>
      </Card.Body>
    </Card>
      <div className="w-100 text-center mb-4 mt-2">
        אין לך  חשבון -&gt; הירשם
      </div>
      </>   
  );
};

export default LoginPage;
