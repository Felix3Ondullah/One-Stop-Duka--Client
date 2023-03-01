import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundImage from "../Assets/bg1.jpg";
import "../Signup/Signup.css";

const Signup = () => {
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
      <Container className="p-4 rounded bg-custom" style={{ maxWidth: '800px' }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center mb-4">Sign Up</h1>
            <Form className="bg-transparent">
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label style={{ fontWeight: 'bold' }} >Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
