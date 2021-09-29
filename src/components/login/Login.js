import React, { Fragment } from "react";
import { Form, Button, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useFormik } from "formik";

const validate = (values) => {
  // Validation using formik
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Login = (values) => {
  const history = useHistory();

  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      RedirectAfterLogin();
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const RedirectAfterLogin = () => {
    history.push("/delivery");
  };

  return (
    <div className="login">
      <div className="login-form">
        <Card body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Group>

            <Button variant="primary" type="submit" id="button">
              Login
            </Button>

            <Form.Group as={Row}>
              <Form.Text className="text-muted">
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
