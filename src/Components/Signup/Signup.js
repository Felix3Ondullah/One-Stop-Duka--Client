import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Assets/bg1.jpg";
import "../Signup/Signup.css";

const Signup = (onLogin) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      }),
    }).then((r) => {
      console.log(username, email, password, passwordConfirmation);
      if (r.ok) {
        r.json().then((user) => onLogin(user));

        alert("Account Registration was successful");

        navigate("/login");
      } else {
        alert("Invalid Username or Password!");

        navigate("/signup");
      }
    });
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        className="p-4 rounded bg-custom"
        style={{ maxWidth: "800px" }}
      >
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center mb-4">Sign Up</h1>
            <Form className="bg-transparent">
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                block
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
