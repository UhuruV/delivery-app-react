import React from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();

  const RedirectAfterRegister = () => {
    history.push("/login");
  };

  return (
    <div className="sign-up">
      <div className="sign-up-form">
        <Card body>
          <Form onSubmit={RedirectAfterRegister}>
            <Row className="mb-3" style={{ marginTop: "6%" }}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Second Name</Form.Label>
                <Form.Control type="text" placeholder="Second Name" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Creating an account means you’re okey with Terms of Service,Privacy Policy and our defult Notification Settings."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
