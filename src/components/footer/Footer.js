import React from "react";
import { Container, Row, Col ,InputGroup,FormControl} from "react-bootstrap";
import * as Icon  from 'react-bootstrap-icons'


const Footer = () => {
  return (
    <div className="footer">
      <Container id="container">
        <Row>
          <Col xs={6} md={4}>
            <h6>Valary Best Delivery</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Maxime mollitia,
              <br /> molestiae consequuntur voluptatum laborum!
            </p>
            <p>Adress: Karen, Ndege Road</p>
            <p>Phone: +254 723728496</p>
          </Col>
          <Col xs={6} md={4}>
            <h6>Information</h6>
            <p>About Us</p>
            <p>Value Proposition</p>
          </Col>
          <Col xs={6} md={4}>
            <h6>Subscribe</h6>
            <>
              <InputGroup className="mb-3">
                <FormControl aria-label="DSubscription"  placeholder="Enter Email Address" />
                <InputGroup.Text>
                <Icon.ArrowRight/>
                </InputGroup.Text>
              </InputGroup>
            </>
          </Col>
        </Row>

        {/* <Container fluid>
        <Row>
          <Col>2021 Valary Best Delivery.</Col>
        </Row>
      </Container> */}
      </Container>
    </div>
  );
};

export default Footer;
