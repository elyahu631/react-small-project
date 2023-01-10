import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterAndLoginContext } from "../Context/RegisterAndLoginContextProvider";
import { Card, Button, Form, Alert } from "react-bootstrap";


const LoginPage = () => {

  const navigate = useNavigate();

  const { usersLocal,SetLogUserIn } = useContext(RegisterAndLoginContext);

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
        <h2 className="text-center mb-4">LOGIN</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLoginSubmit}>
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
          <Button className="w-100 mt-2" type="submit">
            LOGIN
          </Button>
        </Form>
      </Card.Body>
    </Card>
      <div className="w-100 text-center mb-4 mt-2">
       You Don't have an acount -&gt; <button onClick={(e)=>{navigate('/signup')}}>Register</button>
      </div>
      </>   
  );
};

export default LoginPage;
