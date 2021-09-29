import React from "react";
import { Form, Row, Col, Button, Card, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon  from 'react-bootstrap-icons'
import * as sweetalert from "sweetalert";
import { useHistory } from "react-router";

const DeliveryDetails = () => {
  const history = useHistory();

  const onClickContinue = () => {
    sweetalert({
      title: "Success",
      type: "success",
      text: "Your order has been placed.",
    });
  };

  const RedirectToTracking = () => {
    onClickContinue();
    history.push("/tracking");
  };

  return (
    <div>
      <div className="sign-up">
        <div className="sign-up-form delivery">
          <Card body>
            <Form>
              <Row className="mb-5">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter pick up location"
                  />
                  <i class="glyphicon glyphicon-user form-control-feedback"></i>
                </Form.Group>
              </Row>

              <Row className="mb-5">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter delivery destination"
                  />
                </Form.Group>
              </Row>
              <Link>
                <div className="delivery-size mb-5">
                  <Row>
                    <Col xs={6} md={4} className="small">
                      <p className="delivery-para">Small</p>
                    </Col>
                    <Col xs={6} md={4} className="medium">
                      <p className="delivery-para">Medium</p>
                    </Col>
                    <Col xs={6} md={4} className="large">
                      <p className="delivery-para">Large</p>
                    </Col>
                  </Row>
                </div>
              </Link>

              <div className="delivery-details mb-5">
                <Row className="mb-3">
                  <Col xs={6}>Bike</Col>
                  <Col xs={6} style={{ textAlign: "right" }}>
                    <Col>KES 289</Col>
                    <Col>Pick up by 3:30pm</Col>
                  </Col>
                </Row>
              </div>

              <Button
                variant="primary"
                onClick={RedirectToTracking}
                className="btn-continue"
              >
                Continue
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
