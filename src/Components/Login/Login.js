import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundImage from "../Assets/bg1.jpg";
import "../Signup/Signup.css";

const Login = () => {
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
            <h1 className="text-center mb-4">Log In </h1>
            <Form className="bg-transparent">
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Login{" "}
              </Button>
            </Form>
            <p className="text-center mt-3">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
