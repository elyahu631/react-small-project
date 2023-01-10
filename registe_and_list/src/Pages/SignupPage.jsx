import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterAndLoginContext } from "../Context/RegisterAndLoginContextProvider";
import { Card, Button, Form, Alert } from "react-bootstrap";


const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]{3,7}$/;
const passwordRegex = /^[a-zA-Z0-9.!@#$%^&*?><]{8,20}$/;

const SignupPage = () => {
  const navigate = useNavigate();

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { usersLocal, addUserToContext } = useContext(RegisterAndLoginContext);
  const [idCounter, setIdCounter] = useState(1)

 

  // שליחת טופס ההרשמה
  function handleSubmit(e) {
    e.preventDefault();
    let newUser = {
      id:idCounter,
      email: email, 
      password: password,
    };
 
   
    if (!emailRegex.test(email)) {
      console.log("Invalid email");
      setError("כתובת אימייל שגויה");
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

    let userEmailExists = usersLocal.find((user) => user.email === email);
    if (userEmailExists) {
      setError("Invalid user");
      return;
    }
    setIdCounter(prev=>prev+1) 

    addUserToContext(newUser);
    navigate("/");
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">RGISTER</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>            
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Form.Group>
            
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>confirm password</Form.Label>
              <Form.Control
                type="password"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </Form.Group>
            <Button className="w-100 mt-2" type="submit">
            RGISTER
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mb-4 mt-2">
        You have an account -&gt; <button onClick={(e)=>{navigate('/')}}>Login</button>
      </div>
    </>
  );
};

export default SignupPage;
